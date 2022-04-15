import env from "../../../env";
import Localstorage from "../../utils/localstorage";
import axios from "axios";
import addTasks from "./addTasks";

type setter = React.Dispatch<React.SetStateAction<boolean>>;

async function getAndAddTaskFromApi(setLogged:setter) {
  try {
    const token = new Localstorage().get("token");
    const config = {
      headers: { "Authorization":token },
      withCredentials:true
    }
    const res = await axios.get(`${env.api_url}/user`, config);
    const tasks = res.data.tasks;
    addTasks(tasks);
  }
  catch(err:any) {
    console.log(err);
    if(err.response.status === 401) {
      new Localstorage().delete("token");
      setLogged(false);
    }
  }
}

export default getAndAddTaskFromApi;