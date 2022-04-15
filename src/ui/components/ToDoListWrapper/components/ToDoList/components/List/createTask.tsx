import DeleteIcone from "./components/DeleteIcone/Index";
import CheckBox from "../CheckBox/Index";
import EditIcone from "./components/EditIcone/Index";
import { CheckedStyle } from "../../Index";
import onMouseDown from "./onMouseDown";
import { list } from "./Index";

function CreateTask(task:list, index:number, checkedStyle:CheckedStyle) {
  return (
    <div 
      className='task' 
      key={ index }
    >
      <CheckBox 
        borderColor={ checkedStyle.borderColor }
        check={ task.check }
        checkedBackground={ checkedStyle.checkedBackground }
        checkedBorder={ checkedStyle.checkedBorder }
        color={ checkedStyle.color }
      />
      <DeleteIcone />
      <EditIcone />
      <div 
        className='text'
        onMouseDown={ (e) =>  onMouseDown(e) }
      >
        { task.text }
      </div>
    </div>
  );
}

export default CreateTask;