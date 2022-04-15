import { LoggedContext } from '../../../../pages/home/Index';
import Localstorage from '../../../../utils/localstorage';
import DefaultButton from '../../../DefaultButton/Index';
import { ImExit } from 'react-icons/im';
import env from '../../../../../env';
import { useContext } from 'react';
import axios from 'axios';
import './styles.scss';

const LogoutButton = () => {
  const localstorage = new Localstorage();
  const logged = useContext(LoggedContext);

  async function logout() {
    try {
      const token = localstorage.get("token")
      const config = { 
        headers: { "Authorization":token },
        withCredentials:true
      };
      await axios.delete(`${env.api_url}/user/logout`, config);
      localstorage.delete("token");
      logged.set(false);
    }
    catch(err:any) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <DefaultButton
        background='black'
        borderRadius='0px'
        className='logout-button'
        content='Logout'
        onClick={() => logout()}
      />
      <ImExit
        className='logout-icon'
        onClick={() => logout() }
        title="logout"
      />
    </>
  )
}

export default LogoutButton;