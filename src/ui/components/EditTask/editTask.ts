import getIndexOfTask from "../../utils/getIndexOfTask";
import Localstorage from "../../utils/localstorage";
import env from "../../../env";
import axios from "axios";

type formEvent = React.FormEvent<HTMLFormElement>;
type mouseEvent = React.MouseEvent<SVGElement, MouseEvent>;

async function editTask(taskText:string, e:formEvent, mouse?:mouseEvent) {
  e.preventDefault();
  if(!mouse) return;
  const target:any = mouse.target;
  const task:any = target.parentNode;
  const text:any = task.querySelector(".text");
  const listName = task.parentNode.parentNode.id;
  const indexOfTask = getIndexOfTask(task);
  text.textContent = taskText;
  if(logged()) await updateOnBackend(taskText, listName, indexOfTask);
}


function logged() {
  const isLogged = new Localstorage().get("token");
  if(isLogged) return true;
  return false;
}


async function updateOnBackend(text:string, listName:string, indexOfTask:number) {
  try {
    const token = new Localstorage().get("token");
    const config = {
      headers: { "Authorization":token },
      withCredentials:true
    }
    const data = {
      text:text,
      listName:listName
    }
    await axios.put(`${env.api_url}/task/${indexOfTask}`, data, config);
  }
  catch(err) {
    console.log(err);
  }
}

export default editTask;