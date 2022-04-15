import SignUpContainer from '../../../SignupContainer/Index';
import LoginContainer from '../../../LoginContainer/Index';
import DefaultButton from '../../../DefaultButton/Index';
import { BsFillDoorClosedFill } from 'react-icons/bs';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import './styles.scss';

const LoginButton = () => {
  const [ loginOpen, setLoginVisibility ] = useState(false);
  const [ signUpIsOpen, setSignUpVisibility ] = useState(false);

  return (
    <>
      <DefaultButton
        background='black'
        borderRadius='0px'
        className='login-button'
        content='Login'
        onClick={() => setLoginVisibility(true)}
      />
      <BsFillDoorClosedFill 
        className='login-icone'
        onClick={() => setLoginVisibility(true) }
        title="login"
      />
      {loginOpen && createPortal(
        <LoginContainer 
          close={ () => setLoginVisibility(false) }
          openSignUp={ () => setSignUpVisibility(true) }
        />, 
        document.getElementById('login-container')!
      )}
      {signUpIsOpen && createPortal(
        <SignUpContainer 
          close={ () => setSignUpVisibility(false) }
          openLogin={ () => setLoginVisibility(true) }
        />,
        document.getElementById('create-account-container')!
      )}
    </>
  );
}

export default LoginButton