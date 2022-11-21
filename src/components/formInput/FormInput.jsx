import { useState } from 'react';
import './formInput.scss';

const FormInput = (props) => {
    const {label,errorMessage ,onChange, id, ...inputProps} = props;
    const [focused,setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true);
    }
  return (
    <div className='formInput'>
        <label >{label}</label>
        <input {...inputProps}  onFocus= {()=> (inputProps.name === "confirmPassword" && setFocused(true))} onChange= {onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput