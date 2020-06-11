import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './../common/images/react_logo.png'
import userPhoto from "../../assets/images/user.png";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logoContainer}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.middleContainer}>

            </div>
            <div className={s.userContainer}>
                {props.isAuth ?
                    <div className={s.userInfo}>
                        <span>{props.login}</span>
                        <Avatar src={props.profile ? props.profile.photos.large : userPhoto} style={{marginLeft: 20}} icon={<UserOutlined/>} shape="square" size="large"/>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;