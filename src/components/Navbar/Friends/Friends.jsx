import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Friends
            </div>

            <div className={classes.friends}>
                <div className={classes.friend}>
                    {props.name}
                </div>

                <div className={classes.friend}>

                </div>

                <div className={classes.friend}>

                </div>
            </div>
        </div>
    )
};

export default Friends;