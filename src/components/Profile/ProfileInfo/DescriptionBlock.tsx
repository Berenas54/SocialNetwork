import React from 'react';
import style from './DescriptionBlock.module.css';
import {Preloader} from "../../commons/Preloader/Preloader";
import {UserProfileType} from "../../../redux/profilePage-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type DescriptionBlockPropsType = {
    profile: UserProfileType,
    status: string,
    updateStatus: (status: string) => {}
}

export const DescriptionBlock = (props: DescriptionBlockPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={style.description}>
        <div>
            <img className={style.avatar} alt="ava"
                 src={props.profile.photos.large}/>
        </div>
        <h2>{props.profile.fullName}</h2>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        <div>
            <h4>Contacts:</h4>
            <p>facebook:{props.profile.contacts.facebook}</p>
        </div>
        <div>
            {props.profile.aboutMe}
        </div>
    </div>
}
