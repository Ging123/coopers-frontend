import './styles.scss';

interface props {
  background?:string;
  borderRadius?:string;
  className?:string;
  color?:string;
  content:string;
  disabled?:boolean;
  fontSize?:string;
  onClick?:() => void;
  type?:'button'|'submit';
  width?:string;
}

const DefaultButton = (props:props) => {
  const classes = `${props.className||''} default-button` || 'default-button';
  const styles = {
    background:props.disabled ? "gray" : props.background || 'black',
    borderRadius:props.borderRadius || '6px',
    color:props.color || 'white',
    fontSize:props.fontSize || '16px',
    width:props.width
  }

  return (
    <button 
      className={ `${classes}` } 
      disabled={ props.disabled }
      style={ styles } 
      onClick={ props.onClick } 
      type={ props.type }
    >
      { props.disabled ? "loading" : props.content }
    </button>
  )
}

export default DefaultButton;