import girl from './images/ffb27a13-49ed-4f87-a8f2-cce9520a5a99.jpg';
import makeContainerAppear from '../../utils/makeContainerAppear';
import LoginForm from "./components/LoginForm/Index";
import Modal from "../Modal/Index";
import { useEffect } from "react";
import './styles.scss';

interface props {
  close:() => void;
  openSignUp:() => void;
}

const LoginContainer = (props:props) => {
  useEffect(() => {
    makeContainerAppear(".login-container");
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = '';
    }
  } , []);

  return (
    <>
      <div className='login-container'>
        <div className='close' onClick={ props.close }>close</div>
        <img 
          alt="It wasn't possible to load"    
          className='girl-image'      
          src={ girl }
        />
        <div className='container'>
          <div className='title-container'>
            <h1 className='title'>Sing in</h1>
            <h2 className='sub-title'>to access your list</h2>
          </div>
          <LoginForm close={ props.close }/>
          <div 
            onClick={() => {
              props.openSignUp();
              props.close();
            }} 
            className='create-an-account'
          >
            Create an account
          </div>
        </div>
      </div>
      <Modal onClick={ props.close }/>
    </>
  );
}

export default LoginContainer;