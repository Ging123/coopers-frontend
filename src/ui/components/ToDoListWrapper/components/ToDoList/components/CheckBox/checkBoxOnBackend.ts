import getIndexOfTask from "../../../../../../utils/getIndexOfTask";
import Localstorage from "../../../../../../utils/localstorage";
import env from "../../../../../../../env";
import axios from "axios";

type mouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

async function checkBoxOnBackend(e:mouseEvent) {
  try {
    const task = getTaskData(e);
    console.log(task)
    const token = new Localstorage().get("token");
    const config = {
      headers: { "Authorization":token },
      withCredentials:true
    }
    const data = {
      text:task.text,
      listName:task.listName,
      checked:task.checked
    }
    await axios.put(`${env.api_url}/task/${task.index}`, data, config);
  }
  catch(err) {
    console.log(err);
  }
}


function getTaskData(e:mouseEvent) {
  const target:any = e.target;
  const task = target.parentNode;
  const index = getIndexOfTask(task);
  const listName = task.parentNode.parentNode.id;
  const text = task.querySelector(".text").textContent;
  const checkIcone = task.querySelector(".checked-icone");
  const checked = checkIcone ? false : true;
  return {
    text:text,
    index:index,
    listName:listName,
    checked:checked
  }
}

export default checkBoxOnBackend;