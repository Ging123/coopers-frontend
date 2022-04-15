import { LoggedContext } from '../../../../pages/home/Index';
import Localstorage from '../../../../utils/localstorage';
import DefaultButton from '../../../DefaultButton/Index';
import DefaultInput from '../../../DefaultInput/Index';
import { useContext, useState } from 'react';
import colors from '../../../../colors';
import addTasks from '../../addTasks';
import env from '../../../../../env';
import axios from 'axios';
import './styles.scss';



interface props {
  close:() => void;
}

const LoginForm = (props:props) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const logged = useContext(LoggedContext);
  const localstorage = new Localstorage();
  
  async function send() {
    try {
      setLoading(true);
      const data = { username:username, password:password }
      const config = { withCredentials:true };
      const res = await axios.post(`${env.api_url}/user/login`, data, config);
      addTasks(res.data.tasks);
      localstorage.set("token", res.data.token);
      logged.set(true);
      props.close();
    }
    catch(err:any) {
      setError(err.response.data);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      send();
    }}>
      <DefaultInput
        className='input'
        fieldName='User:'
        onChange={ (e) => setUsername(e.target.value) }
        value={ username }
      />
      <DefaultInput
        className='input'
        fieldName='Password:'
        onChange={ (e) => setPassword(e.target.value) }
        type='password'
        value={ password }
      />
      <DefaultButton
        background={ colors.main.green }
        borderRadius='0px'
        content='Sign in'
        disabled={ loading }
        type='submit'
      />
      {error && 
        <div style={{ color:"red", marginTop:'10px' }}>
          { error }
        </div>
      }
    </form>
  )
}

export default LoginForm