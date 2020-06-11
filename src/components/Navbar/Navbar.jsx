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
                        <span className={classes.navText}>Profile</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className={classes.item} activeClassName={classes.activeLink}>
                        <MessageOutlined />
                        <span className={classes.navText}>Messages</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/users" className={classes.item} activeClassName={classes.activeLink}>
                        <UserOutlined />
                        <span className={classes.navText}>Users</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={classes.item} activeClassName={classes.activeLink}>
                        <SnippetsOutlined />
                        <span className={classes.navText}>News</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={classes.item} activeClassName={classes.activeLink}>
                        <SoundOutlined />
                        <span className={classes.navText}>Music</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={classes.item} activeClassName={classes.activeLink}>
                        <ToolOutlined />
                        <span className={classes.navText}>Settings</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;