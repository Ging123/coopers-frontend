import { LoggedContext } from '../../../../../../pages/home/Index';
import DefaultTextArea from '../../../../../DefaultTextArea/Index';
import DefaultButton from '../../../../../DefaultButton/Index';
import { useContext, useState } from 'react';
import { ImCross } from 'react-icons/im';
import createTask from './createTask';
import './styles.scss';

interface props {
  close:() => void;
  listId:string;
}

const TextAreaForTask = (props:props) => {
  const [ task, setTask ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const logged = useContext(LoggedContext);
  
  return (
    <form 
      className='text-area-for-task-container'
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        await createTask(task, props.listId, logged.value);
        setTask('');
        setLoading(false);
      }}
      style={{ margin:'40px 0px -10px 0px' }}
    >
      <DefaultTextArea
        className='text-area-of-task'
        onChange={ (e) => setTask(e.target.value) }
        placeholder='Write your task here...'
        value={ task }
      />
      <div className='container-of-button-and-cross'>
        <DefaultButton
          content='Create'
          disabled={ loading }
        />
        <ImCross
          className='close-icone' 
          onClick={ props.close }
          title='Close'
        />
      </div>
      
    </form>
  )
}

export default TextAreaForTask;