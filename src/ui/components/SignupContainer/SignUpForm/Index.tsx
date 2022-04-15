import DefaultButton from '../../DefaultButton/Index';
import DefaultInput from '../../DefaultInput/Index';
import colors from '../../../colors';
import env from '../../../../env';
import { useState } from 'react';
import axios from 'axios';
import './styles.scss';

interface props {
  close:() => void;
  openLogin:() => void;
}

const SignUpForm = (props:props) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false);

  async function send() {
    try {
      setLoading(true);
      const data = { username:username, password:password };
      const config = { withCredentials:true };
      await axios.post(`${env.api_url}/user`, data, config);
      props.openLogin();
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
        fieldName='Username'
        maxLength={ 30 }
        onChange={ (e) => setUsername(e.target.value) }
        placeholder='Type your username'
        required={ true }
        value={ username }
      />
      <DefaultInput
        className='input'
        fieldName='Password'
        maxLength={ 30 }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder='Type Your Password'
        required={ true }
        type='password'
        value={ password }
      />
      <DefaultButton
        background={ colors.main.green }
        borderRadius='0px'
        content='Create account'
        disabled={ loading }
        type='submit'
      />
      {error &&
        <div style={{ color:"red", marginTop:'10px', textAlign:"center" }}>
          { error }
        </div>
      }
    </form>
  )
}

export default SignUpForm