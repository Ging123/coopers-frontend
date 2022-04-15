import EditTask from '../../../../../../../EditTask/Index';
import { BsPencil } from 'react-icons/bs';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import './styles.scss';

const EditIcone = () => {
  const [ editTask, setEditTask ] = useState(false);
  const [ mouse, setMouse ] = useState<React.MouseEvent<SVGElement, MouseEvent>>();

  return (
    <>
      <BsPencil 
        className='edit-icone'
        title='edit task'
        onClick={(e) => {
          setMouse(e);
          setEditTask(true)
        }}
      />
      { editTask && 
        createPortal (
          <EditTask 
            close={ () => setEditTask(false) } 
            mouse={mouse}
          />, 
          document.getElementById('edit-task-container')!
        )
      }
    </>
  );
}

export default EditIcone;