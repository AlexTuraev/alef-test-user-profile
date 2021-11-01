import React, {useContext} from 'react';
import {ServiceContext} from '../service-context/service-context';

import './input-field.scss';

const InputField = ({label='', placeholder='', value='', nameField})=>{
    const onChangeUserData = useContext(ServiceContext);

    return(
        <div className='input-field'>
            <p className='input-field__label'>{label}</p>
            <input className='input-field__input' placeholder={placeholder} value={value} onChange={(event)=>onChangeUserData(nameField, event.target.value)} ></input>
        </div>
    );
}

export default InputField;