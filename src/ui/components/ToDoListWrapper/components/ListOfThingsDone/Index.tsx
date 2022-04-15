import ToDoList from '../ToDoList/Index';
import defaultList from './defaultList';
import color from '../../../../colors';

const ListOfThingsDone = () => {
  return (
    <ToDoList
      checkedStyle={{ 
        borderColor:color.main.green,
        checkedBackground:color.main.green,
        checkedBorder:color.main.green,
        color:"white"
      }}
      id="done"
      list={ defaultList }
      subTitle={<>
        <div>Congratulions!</div>
        <b>You have done <span id="quantity-of-tasks">5</span> tasks</b>
      </>}
      title='Done'
      retangleColor={ color.main.green }
    />
  );
}

export default ListOfThingsDone