import TextAreaForTask from './components/TextAreaForTask/Index';
import DeleteAllButton from './components/DeleteAllButton/Index';
import List, { list } from './components/List/Index';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import './styles.scss';

export interface CheckedStyle {
  borderColor:string;
  checkedBackground?:string;
  checkedBorder:string;
  color:string;
}

interface props {
  checkedStyle:CheckedStyle;
  list:list[];
  id:string;
  subTitle:any;
  title:string;
  retangleColor:string;
}

const ToDoList = (props:props) => {
  const [ textAreaVisible, setTextAreaVisibility ] = useState(false);
  
  return (
    <div className='to-do-list' id={ props.id }>
      <div 
        className='rentagle' 
        style={{ background:props.retangleColor }}
      />
      <h2 className='title'>{ props.title }</h2>
      <div className='sub-title'>{ props.subTitle }</div>
      <BsThreeDots 
        className='add-icone'
        onClick={() => setTextAreaVisibility(true)}
        title='create task'
      />
      { textAreaVisible && 
        <TextAreaForTask 
          close={() => setTextAreaVisibility(false)}
          listId={ props.id }
      />}
      <List 
        listId={ props.id } 
        listData={ props.list }
        checkedStyle={ props.checkedStyle } 
      />
      <DeleteAllButton id={ props.id }/>
    </div>
  );
}

export default ToDoList;