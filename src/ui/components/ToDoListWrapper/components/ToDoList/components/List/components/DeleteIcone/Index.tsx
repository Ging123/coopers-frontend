import { FaRegTrashAlt } from 'react-icons/fa';
import deleteTask from './deleteTask';
import './styles.scss';

const DeleteIcone = () => {
  return (
    <FaRegTrashAlt 
      className='delete-card-icone'
      onClick={(e) => deleteTask(e)}
      title="delete task"
    />
  );
}

export default DeleteIcone;