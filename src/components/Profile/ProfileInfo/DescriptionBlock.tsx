import React, {ChangeEvent} from 'react';
import style from './DescriptionBlock.module.css';
import {Preloader} from "../../commons/Preloader/Preloader";
import {UserProfileType} from "../../../redux/profilePage-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/image/user_photo.png";


type DescriptionBlockPropsType = {
    isOwner: boolean,
    profile: UserProfileType,
    status: string,
    updateStatus: (status: string) => {}
    savePhoto: (photo: File) => {}
}


export const DescriptionBlock = (props: DescriptionBlockPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    //FIX ANY!!!
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement> | any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <div className={style.description}>
        <div>
            <img className={style.avatar} alt={"avatar"}
                 src={props.profile.photos.large || userPhoto}/>
        </div>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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
