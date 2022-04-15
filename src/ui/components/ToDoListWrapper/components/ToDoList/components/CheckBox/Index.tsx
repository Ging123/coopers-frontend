import Localstorage from "../../../../../../utils/localstorage";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from 'react';
import './styles.scss';
import checkBoxOnBackend from "./checkBoxOnBackend";

interface props {
  borderColor?:string;
  check?:boolean;
  checkedBackground?:string;
  checkedBorder?:string;
  color?:string;
}

const CheckBox = (props:props) => {
  const logged = new Localstorage().get("token");
  const [checked, setChecked] = useState(props.check);
  const checkBoxNotCheckedStatus = { border:`2px solid ${props.borderColor}` }
  const checkBoxCheckedStatus = {
    background:props.checkedBackground, 
    border:`2px solid ${props.checkedBorder}`
  }

  return (
    <div 
      className="check-box"
      onClick={async (e) => {
        if(checked) setChecked(false);
        else setChecked(true);
        if(logged) await checkBoxOnBackend(e);
      }}
      style={ checked ? checkBoxCheckedStatus : checkBoxNotCheckedStatus }
    >
      {checked && 
        <AiOutlineCheck
          className="checked-icone"
          style={{ color:props.color }}
        />
      }
    </div>
  );
}

export default CheckBox;