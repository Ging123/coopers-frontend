import addStarIfInputIsRequired from '../../utils/addStarIfInputIsRequired';
import './styles.scss';

interface props {
  className?:string;
  fieldName?:string;
  maxLength?:number;
  minLength?:number;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
  required?:boolean;
  type?:'email'|'number'|'password'|'tel'|'text';
  value:string|number;
}

const DefaultInput = (props:props) => {
  const fieldName = addStarIfInputIsRequired(props.fieldName, props.required);
  const telephonePattern = getTellphonePattern(props.type);

  return (
    <div className={ props.className }>
      <div style={{ marginBottom:'5px' }}>{ fieldName }</div>
      <input 
        className='default-input'
        maxLength={ props.maxLength }
        minLength={ props.minLength }
        onChange={ props.onChange }
        pattern={ telephonePattern }
        placeholder={ props.placeholder }
        required={ props.required }
        type={ props.type }
        value={ props.value }
      />
    </div>
  );
}

function getTellphonePattern(type='text') {
  return type === 'tel' ? '[0-9]{3} [0-9]{3} [0-9]{4}' : undefined;
}

export default DefaultInput