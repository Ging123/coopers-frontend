import getElementWidthAndHeight from "../../../../../../utils/getElementWidthAndHeight";
import getElementPosition from "../../../../../../utils/getElementPosition";
import getMousePosition from "../../../../../../utils/getMousePosition";
import getIndexOfTask from "../../../../../../utils/getIndexOfTask";
import Localstorage from "../../../../../../utils/localstorage";
import env from "../../../../../../../env";
import axios from "axios";

interface position {
  x:number,
  y:number
}

async function onMouseUp(task:any, e:MouseEvent) {
  deleteDragObject(e);
  const toDoThatMouseIsInside = verifyIfMouseIsInsideOfSomeToDoList(e);
  const isInTheSameToDoList = mouseIsInTheSameList(toDoThatMouseIsInside, task);
  if(toDoThatMouseIsInside === -1) return taskComeBackToItsList(task);
  if(isInTheSameToDoList) return taskComeBackToItsList(task);
  await AddTaskInAnotherList(task, toDoThatMouseIsInside); 
}


function verifyIfMouseIsInsideOfSomeToDoList(e:MouseEvent) {
  const query = ".to-do-list-wrapper > .to-do-list";
  const toDoList:any = document.querySelectorAll(query);
  const mousePosition = getMousePosition(e);
  for(let i = 0; i < toDoList.length; i++) {
    const mouseIsInsideX = mouseIsInsideToDoX(toDoList[i], mousePosition);
    const mouseIsInsideY = mouseIsInsideToDoY(toDoList[i], mousePosition);
    if(mouseIsInsideX && mouseIsInsideY) return i;
  }
  return -1;
}


function mouseIsInsideToDoX(toDoList:any, mouse:position) {
  const toDoPosition = getElementPosition(toDoList);
  const toDoListWidth = getElementWidthAndHeight(toDoList).width;
  const xPixelsWithToDoList = toDoPosition.x + toDoListWidth;

  const mouseInsideToDoList = mouse.x >= toDoPosition.x 
  && mouse.x <= xPixelsWithToDoList;
  return mouseInsideToDoList;
}


function mouseIsInsideToDoY(toDoList:any, mouse:position) {
  const mouseY = window.scrollY + mouse.y;
  const toDoPosition = getElementPosition(toDoList);
  const toDoListHeight = getElementWidthAndHeight(toDoList).height;
  const yPixelsWithToDoList = toDoPosition.y + toDoListHeight;

  const mouseInsideToDoList = mouseY >= toDoPosition.y 
  && mouseY <= yPixelsWithToDoList;
  return mouseInsideToDoList;
}


function taskComeBackToItsList(taskRef:any) {
  taskRef.style.opacity = 1;
}


async function AddTaskInAnotherList(task:any, indexOfList:number) {
  const toDoList:any = document.querySelectorAll(".to-do-list")[indexOfList];
  const listToAddTask = toDoList.querySelector(".list");
  const oldListName = task.parentNode.parentNode.id;
  const indexOfTask = getIndexOfTask(task);

  listToAddTask.appendChild(task);
  task.style.opacity = 1;
  updateQuantityOfTasks(toDoList.id);

  const newListName = toDoList.id;
  if(logged()) await updateOnBackend(oldListName, indexOfTask, newListName);
}


function logged() {
  const isLogged = new Localstorage().get("token");
  if(isLogged) return true;
  return false;
}


function updateQuantityOfTasks(taskThatGainNewTask:string) {
  const quantityOfTasks:any = document.getElementById("quantity-of-tasks");
  const oldQuantityOfTasks = parseInt(quantityOfTasks.textContent);
  if(taskThatGainNewTask !== "done") {
    return quantityOfTasks.textContent = oldQuantityOfTasks - 1;
  }
  quantityOfTasks.textContent = oldQuantityOfTasks + 1;
}


function deleteDragObject(e:MouseEvent) {
  const drabObject:any = e.currentTarget;
  drabObject.remove()
}


function mouseIsInTheSameList(listIndex:number, taskRef:any) {
  if(listIndex < 0) return false;
  const query = ".to-do-list-wrapper > .to-do-list";
  const toDoListThatMouseIsIn = document.querySelectorAll(query)[listIndex];
  return toDoListThatMouseIsIn.contains(taskRef);
}


async function updateOnBackend(oldListName:string, indexOfTask:number,
newListName:string) {
  try {
    const token = new Localstorage().get("token");
    const config = {
      headers: { "Authorization":token },
      withCredentials:true
    }
    const data = {
      oldList:oldListName,
      newList:newListName
    }
    await axios.put(`${env.api_url}/task/swap/${indexOfTask}`, data, config);
  }
  catch(err) {
    console.log(err);
  }
}

export default onMouseUp;