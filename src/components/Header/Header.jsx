import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './../common/images/react_logo.png'

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} alt="logo"/>

        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    <span>{props.login}</span>
                    <Avatar style={{marginLeft: 20}} icon={<UserOutlined/>} shape="square" size="large"/>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;