import React from 'react';
import s from './ProfileInfo.module.css'
import pic from './michael-weisheim-beresin-11-4.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={pic} width="800" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    )
};

export default ProfileInfo;