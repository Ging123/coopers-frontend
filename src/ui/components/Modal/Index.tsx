import './styles.scss';

interface props {
  onClick?:() => void;
}

const Modal = (props:props) => {
  return (
    <div 
      className='modal' 
      onClick={ props.onClick }
    />
  );
}

export default Modal