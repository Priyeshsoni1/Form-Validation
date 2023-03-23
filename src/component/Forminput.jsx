import React,{useState} from 'react'
import "./forminput.css"
const Forminput = (props) => {

    const {label,errorMessage,onChange,id,...inputProps}=props;
    const [focused,setFocused]=useState(false);
    const handleFocus=(e)=>{
      setFocused(true);
    }
  return (
    <div className="formInput">
        <label htmlFor="">{props.label}</label>
        <input {...inputProps} onFocus={()=> inputProps.name==="confirmPassword" && setFocused(true)}
        onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default Forminput
