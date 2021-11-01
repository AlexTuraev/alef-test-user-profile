import React from 'react';
import ChildItem from '../child-item';
import InputField from '../input-field';

import './user-form.scss';

const UserForm = ({handlerAddChild, userData, onDeleteChild, onSave})=>{
    const {userName='', userAge='', children=[]} = userData;

    const elements = children.map(item =>{
        return(
            <li key={item.id}>
                <ChildItem {...item} onDeleteChild={onDeleteChild} />
            </li>
        );
    })

    let classBtnDisabled = '';
    if (children.length === 5) {
        classBtnDisabled += 'ui-btn1--disabled';
    }

    return(
        <section className='ui-container user-form'>
            <div>
                <span className='user-form__header'>Персональные данные</span>
            </div>
            <div className='user-form__user-data'>
                <InputField label='Имя' placeholder='Введите имя' value={userName} nameField={{category: 'user', field: 'userName'}} />
                <InputField label='Возраст' placeholder='Введите возраст' value={userAge} nameField={{category: 'user', field: 'userAge'}} />
            </div>
            <div>
                <div>
                    <div className='user-form__child-header'>
                        <span className='user-form__header'>Дети (макс. 5)</span>
                        <div onClick={handlerAddChild} className={`ui-btn1 user-form__add-btn ${classBtnDisabled}`}>
                            <span className='user-form__plus'>+</span>
                            <span className='user-form__btn-text'>Добавить ребенка</span>
                        </div>
                    </div>

                    <ul className='user-form__child-data'>
                        {elements}
                    </ul>

                    <div className='ui-btn1 ui-btn1--filled user-form__add-btn' onClick={onSave}>
                        <span>Сохранить</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserForm;