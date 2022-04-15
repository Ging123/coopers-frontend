import makeContainerAppear from "../../utils/makeContainerAppear";
import DefaultTextArea from "../DefaultTextArea/Index";
import DefaultButton from "../DefaultButton/Index";
import { BsListTask } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ImCross } from 'react-icons/im';
import Modal from "../Modal/Index";
import editTask from "./editTask";
import './styles.scss';

interface props {
  close:() => void;
  mouse?:React.MouseEvent<SVGElement, MouseEvent>;
}

const EditTask = (props:props) => {
  const [ task, setTask ] = useState('');
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
    makeContainerAppear(".edit-task")
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  }, []);

  return (
    <>
      <Modal onClick={ props.close }/>
      <form 
        className='edit-task' 
        onSubmit={async (e) => {
          setLoading(true);
          await editTask(task, e, props.mouse);
          setLoading(false);
          props.close();
        }}
      >
        <div className='title-container'>
          <BsListTask className='task-icone'/>
          <div className='title'>Task</div>
        </div>
        <ImCross
          className='close-icone' 
          onClick={ props.close }
          title='Close'
        />
        <DefaultTextArea
          className='text-area-for-task'
          onChange={(e) => setTask(e.target.value)}
          placeholder='write your task'
          value={ task }
        />
        <DefaultButton
          className='create-task-button'
          content='Edit'
          disabled={ loading }
          type="submit"
        />
      </form>
    </>
  );
}

export default EditTask