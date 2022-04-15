import addStarIfInputIsRequired from '../../utils/addStarIfInputIsRequired';
import './styles.scss';

interface props {
  className?:string;
  fieldName?:string;
  onChange:(e:any) => void;
  placeholder?:string;
  maxLength?:number;
  required?:boolean;
  value:string|number;
}

const DefaultTextArea = (props:props) => {
  const fieldName = addStarIfInputIsRequired(props.fieldName, props.required);

  return (
    <div className={ props.className }>
      <div style={{ marginBottom:'5px' }}>{ fieldName }</div>
      <textarea
        className='default-text-area'
        maxLength={ props.maxLength }
        onChange={ props.onChange }
        placeholder={ props.placeholder }
        rows={ 5 }
        required={ props.required }
        value={ props.value }
      /> 
    </div>
  )
}

export default DefaultTextArea