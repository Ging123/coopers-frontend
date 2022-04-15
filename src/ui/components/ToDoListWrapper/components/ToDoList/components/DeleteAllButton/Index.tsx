import { LoggedContext } from '../../../../../../pages/home/Index';
import DefaultButton from '../../../../../DefaultButton/Index';
import { useContext } from 'react';
import deleteAll from './deleteAll';

const DeleteAllButton = ({ id }:{ id:string }) => {
  const logged = useContext(LoggedContext)

  return (
    <DefaultButton
      className='erase-all-button'
      content='erase all'
      onClick={ () => deleteAll(id, logged.value) }
    />
  )
}

export default DeleteAllButton;