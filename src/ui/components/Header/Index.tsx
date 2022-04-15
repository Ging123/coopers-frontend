import CoopersText from './components/CoopersText/Index';
import LoginButton from './components/LoginButton/Index';
import { LoggedContext } from '../../pages/home/Index';
import { useContext } from 'react';
import './styles.scss';
import LogoutButton from './components/LogoutButton/Index';

const Header = () => {
  const logged = useContext(LoggedContext);

  return (
    <header className='header'>
      <CoopersText/>
      {logged.value ? (<LogoutButton/>) : (<LoginButton/>)}
    </header>
  )
}

export default Header;