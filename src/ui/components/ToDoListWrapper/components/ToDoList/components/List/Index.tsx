import { CheckedStyle } from '../../Index';
import createTask from './createTask';
import './styles.scss';

export interface list {
  check?:boolean;
  text:string;
}

interface props {
  checkedStyle:CheckedStyle;
  listData:list[];
  listId:string;
}

const List = (props:props) => {

  return (
    <div className='list' >
      { props.listData.map((list, index) => createTask(list, index, props.checkedStyle))}
    </div>
  );
}

export default List;