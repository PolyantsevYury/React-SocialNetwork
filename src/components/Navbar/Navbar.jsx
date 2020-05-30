import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { UserOutlined, MessageOutlined, AuditOutlined,
         SnippetsOutlined, SoundOutlined, ToolOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.mainNav}>
                <div>
                    <NavLink to="/profile"  className={classes.item} activeClassName={classes.activeLink}>
                        <AuditOutlined />
                        <span>Profile</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={classes.item} activeClassName={classes.activeLink}>
                        <MessageOutlined />
                        <span>Messages</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/users" className={classes.item} activeClassName={classes.activeLink}>
                        <UserOutlined />
                        <span>Users</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={classes.item} activeClassName={classes.activeLink}>
                        <SnippetsOutlined />
                        <span>News</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={classes.item} activeClassName={classes.activeLink}>
                        <SoundOutlined />
                        <span>Music</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={classes.item} activeClassName={classes.activeLink}>
                        <ToolOutlined />
                        <span>Settings</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;