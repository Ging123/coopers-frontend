import axios from "axios";
import env from "../../../../../../../env";
import Localstorage from "../../../../../../utils/localstorage";

async function deleteAll(idOfList:string, useIsLogged:boolean) {
  deleteAllOnFrontEnd(idOfList);
  if(useIsLogged) await deleteOnBackend(idOfList);
}


function deleteAllOnFrontEnd(idOfList:string) {
  const list:any = document.querySelector(`#${idOfList} .list`);
  list.innerHTML = "";
  updateQuantityOfTasks(idOfList);
}


function updateQuantityOfTasks(idOfList:string) {
  if(idOfList !== "done") return;
  const quantityOfTask:any = document.getElementById("quantity-of-tasks");
  if(!quantityOfTask) return;
  quantityOfTask.textContent = 0;
}


async function deleteOnBackend(idOfList:string) {
  try {
    const localstorage = new Localstorage();
    const token = localstorage.get("token")
    const config = { 
      headers: { "Authorization":token },
      withCredentials:true,
      data:{ listName:idOfList }
    };
    await axios.delete(`${env.api_url}/task`, config);
  }
  catch(err) {
    console.log(err);
  }
}

export default deleteAll;