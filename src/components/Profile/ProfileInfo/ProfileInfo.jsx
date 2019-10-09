import React from 'react';
import s from './ProfileInfo.module.css'
import pic from './michael-weisheim-beresin-11-4.jpg'
import Loader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader />
    }

    return (
        <div>
            <div>
                <img src={pic} width="800" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + discription
            </div>
        </div>
    )
};

export default ProfileInfo;