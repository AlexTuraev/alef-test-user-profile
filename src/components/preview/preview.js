import React from 'react';

import './preview.scss';

const Preview = ({userName='', userAge='', children=[]}) =>{
    
    const elements = children.map(item =>{
        return(
            <li key={item.id+'preview'}>
                <div><span className='preview__user-data'>{`${item.childName==='' ? ' -- ' : item.childName}, ${item.childAge==='' ? ' -- ' : item.childAge} лет`}</span></div>
            </li>
        );
    });

    return (
        <section className='ui-container preview'>
            <div><span className='preview__header'>Персональные данные</span></div>
            <div><span className='preview__user-data'>{`${userName==='' ? ' -- ' : userName}, ${userAge==='' ? ' -- ' : userAge} лет`}</span></div>
            
            <div className='preview__children'>
                <span className='preview__header'>Дети</span>
            </div>
            <ul className='preview__child-data'>
                {elements}
            </ul>
        </section>
    );
}

export default Preview;