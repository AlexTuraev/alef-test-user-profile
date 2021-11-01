import React from 'react';
import InputField from '../input-field';

import './child-item.scss';

const ChildItem = ({id, childName, childAge, onDeleteChild})=>{
    return(
        <div className='child-item'>
            <InputField label='Имя' placeholder='Name' nameField={{category: 'children', field: 'childName', id: id}} value={childName} />
            <InputField label='Возраст' placeholder='Age' nameField={{category: 'children', field: 'childAge', id: id}} value={childAge} />
            <div className='child-item__delete' onClick={()=>onDeleteChild(id)} >Удалить</div>
        </div>
    );
}

export default ChildItem;