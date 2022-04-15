import createTask from "../ToDoListWrapper/components/ToDoList/components/TextAreaForTask/createTask";

interface task {
  text:string;
  checked?:boolean;
  listName:string;
}

function addTasks(tasks:task[]) {
  clearAllToDo();
  addTasksToLists(tasks);
}


function clearAllToDo() {
  const toDoLists = document.querySelectorAll(".to-do-list > .list");
  for(let i = 0; i < toDoLists.length; i++) {
    toDoLists[i].innerHTML = "";
  }
  const quantityOfTask = document.getElementById("quantity-of-tasks");
  quantityOfTask!.textContent = "0";
}


function addTasksToLists(tasks:task[]) {
  for(const task of tasks) {
    const list = document.querySelector(`#${task.listName} > .list`);
    if(list) createTask(task.text, task.listName, false, task.checked);
  }
}

export default addTasks;