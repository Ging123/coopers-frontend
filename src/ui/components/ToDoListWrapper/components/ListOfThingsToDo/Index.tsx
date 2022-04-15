import ToDoList from '../ToDoList/Index';
import defaultList from './defaultList';
import color from '../../../../colors';

const ListOfThingsToDo = () => {
  return (
    <ToDoList
      checkedStyle={{ 
        borderColor:color.main.orange,
        checkedBorder:"gray",
        color:color.main.green
      }}
      id="do"
      list={ defaultList }
      subTitle='Take a breath. Start doing.'
      title='To-do'
      retangleColor={ color.main.orange }
    />
  )
}

export default ListOfThingsToDo