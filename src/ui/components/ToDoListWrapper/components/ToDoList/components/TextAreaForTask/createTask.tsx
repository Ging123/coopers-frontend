import Localstorage from "../../../../../../utils/localstorage";
import DeleteIcone from "../List/components/DeleteIcone/Index";
import EditIcone from "../List/components/EditIcone/Index";
import CheckBox from "../CheckBox/Index";
import onMouseDown from "../List/onMouseDown";
import color from "../../../../../../colors";
import env from "../../../../../../../env";
import { render } from "react-dom";
import axios from "axios";

async function createTask(task:string, listId:string, mustCreateOnBackEnd?:boolean, 
checked=false) {
  if(!task) return;
  const list:any = document.querySelector(`#${listId} .list`);
  const taskContainer = createADivContainer();
  const newTaskJsx = CreateANewTask(task, listId, checked);
  list.appendChild(taskContainer);
  render(newTaskJsx, taskContainer);
  updateQuantityOfTask(listId);
  if(mustCreateOnBackEnd) await createTaskOnBackend(task, listId);
}


function CreateANewTask(task:string, listId:string, checked:boolean) {
  const checkBoxStyle = getCheckBoxStyle(listId)

  return (
    <>
      <CheckBox 
        borderColor={ checkBoxStyle.borderColor }
        check={ checked }
        checkedBackground={ checkBoxStyle.checkedBackground }
        checkedBorder={ checkBoxStyle.checkedBorder }
        color={ checkBoxStyle.color }
      />
      <DeleteIcone />
      <EditIcone />
      <div 
        className='text'
        onMouseDown={ (e) => onMouseDown(e) }
      >
        { task }
      </div>
    </>
  );
}


function createADivContainer() {
  const div = document.createElement("div");
  div.className = "task";
  return div;
}


function updateQuantityOfTask(listId:string) {
  if(listId !== "done") return;
  const quantityOfTask:any = document.getElementById("quantity-of-tasks");
  const newQuantity = parseInt(quantityOfTask.textContent) + 1;
  quantityOfTask.textContent = newQuantity;
}


async function createTaskOnBackend(text:string, listName:string) {
  try { 
    const localstorage = new Localstorage();
    const token = localstorage.get("token")
    const config = { 
      headers: { "Authorization":token },
      withCredentials:true
    };
    const data = {
      text:text, 
      listName:listName
    };
    await axios.post(`${env.api_url}/task`, data, config);
  }
  catch(err) {
    console.log(err);
  }
}


function getCheckBoxStyle(listId:string) {
  if(listId === "do") return {
    borderColor:color.main.orange,
    checkedBorder:"gray",
    color:color.main.green
  }
  return {
    borderColor:color.main.green,
    checkedBackground:color.main.green,
    checkedBorder:color.main.green,
    color:"white"
  }
}

export default createTask;