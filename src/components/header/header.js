import React from 'react';

import './header.scss';

const Header = ({onChangeCurrentPage}) =>{
    return(
        <header className='header'>
            <div className='header__logo'></div>
            <span className='header__menu-item' onClick={()=>onChangeCurrentPage(0)} >Форма</span>
            <span className='header__menu-item' onClick={()=>onChangeCurrentPage(1)} >Превью</span>
        </header>
    );
}

export default Header;