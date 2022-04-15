import ListOfThingsDone from './components/ListOfThingsDone/Index';
import ListOfThingsToDo from './components/ListOfThingsToDo/Index';
import Tryangle from './components/Tryangle/Index';
import './styles.scss';

const ToDoListWrapper = () => {

  return (
    <div className='to-do-list-wrapper'>
      <Tryangle/>
        <ListOfThingsToDo/>
        <ListOfThingsDone/>
    </div>
  );
}

export default ToDoListWrapper;