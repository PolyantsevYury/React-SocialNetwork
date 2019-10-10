import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://dev-gang.ru/static/storage/24808028622541768947383165896446886988.png" alt="#"/>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
};

export default Header;