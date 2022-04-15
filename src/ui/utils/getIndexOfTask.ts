function getIndexOfTask(task:any) {
  task.id = "get-index";
  const toDoList = task.parentNode;
  const tasks = toDoList.querySelectorAll(".task");
  let index = -1;
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].id === "get-index") {
      index = i;
      break;
    }
  }
  task.id = "";
  return index;
}

export default getIndexOfTask;