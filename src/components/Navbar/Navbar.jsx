import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { UserOutlined, MessageOutlined, AuditOutlined,
         SnippetsOutlined, SoundOutlined, ToolOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.mainNav}>
                <div className={classes.item}>
                    <AuditOutlined />
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <MessageOutlined />
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <UserOutlined />
                    <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <SnippetsOutlined />
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <SoundOutlined />
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <ToolOutlined />
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </div>

            </div>
        </nav>
    )
};

export default Navbar;