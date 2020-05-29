import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://dev-gang.ru/static/storage/24808028622541768947383165896446886988.png" alt="#"/>

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