import makeContainerAppear from '../../utils/makeContainerAppear';
import SignUpForm from './SignUpForm/Index';
import Modal from '../Modal/Index';
import { useEffect } from 'react';
import './styles.scss';

interface props {
  close:() => void;
  openLogin:() => void;
}

const SignUpContainer = (props:props) => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    makeContainerAppear('.sign-up-container')

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  } , []);
  
  return (
    <>
      <div className='sign-up-container'>
        <div className='close' onClick={ props.close }>close</div>
        <div>
          <div className='title-container'>
            <h1 className='title'>Sign up</h1>
            <h2 className='sub-title'>to access and create lists</h2>
          </div>
          <SignUpForm 
            close={ props.close }
            openLogin={ props.openLogin }
          />
          <div 
            onClick={() => {
              props.openLogin();
              props.close();
            }} 
            className='create-an-account'
            >
            Login in your account
          </div>
        </div>
     </div>
     <Modal onClick={ props.close }/>
    </>
  );
}

export default SignUpContainer