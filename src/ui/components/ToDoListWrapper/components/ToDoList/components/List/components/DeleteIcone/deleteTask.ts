import getIndexOfTask from "../../../../../../../../utils/getIndexOfTask";
import Localstorage from "../../../../../../../../utils/localstorage";
import env from "../../../../../../../../../env";
import axios from "axios";

type mouseEvent = React.MouseEvent<SVGElement, MouseEvent>;

async function deleteTask(e:mouseEvent) {
  const target:any = e.currentTarget;
  const task = target.parentNode;
  const toDoListName = task.parentNode.parentNode.id;
  const taskIndex = getIndexOfTask(task);
  updateQuantityOfTasksInDoneList(toDoListName);
  task.remove();
  if(logged()) await deleteOnBackend(toDoListName, taskIndex);
}


function updateQuantityOfTasksInDoneList(toDoListName:string) {
  if(toDoListName !== "done") return; 
  const doneList:any = document.querySelector("#quantity-of-tasks");
  if(!doneList) return;
  const value = parseInt(doneList.textContent) - 1;
  doneList.textContent = value;
}


async function deleteOnBackend(toDoListName:string, taskIndex:number) {
  try {
    const localstorage = new Localstorage();
    const token = localstorage.get("token")
    const config = { 
      headers: { "Authorization":token },
      withCredentials:true,
      data:{ listName:toDoListName }
    };
    await axios.delete(`${env.api_url}/task/${taskIndex}`, config);
  }
  catch(err) {
    console.log(err);
  }
}


function logged() {
  const isLogged = new Localstorage().get("token");
  if(isLogged) return true;
  return false;
}

export default deleteTask;