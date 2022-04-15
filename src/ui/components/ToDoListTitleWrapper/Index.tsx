import ToDoSubTitle from './components/ToDoSubTitle/Index';
import ToDoTitle from './components/ToDoTitle/Index';
import './styles.scss';

const ToDoListTitleWrapper = () => {
  return (
    <div className='to-do-list-title-wrapper'>
      <div className='black-background'/>
      <div className='to-do-list-title-and-sub-title'>
        <ToDoTitle/>
        <ToDoSubTitle/>
      </div>
    </div>
  )
}

export default ToDoListTitleWrapper