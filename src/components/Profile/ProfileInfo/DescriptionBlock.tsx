import React, {ChangeEvent, useState} from 'react';
import style from './DescriptionBlock.module.css';
import {Preloader} from "../../commons/Preloader/Preloader";
import {UserProfileType} from "../../../redux/profilePage-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import userPhoto from "../../../assets/image/user_photo.png";
import ProfileDataForm from "./ProfileDataForm";


type DescriptionBlockPropsType = {
    isOwner: boolean,
    profile: UserProfileType,
    status: string,
    updateStatus: (status: string) => void,
    savePhoto: (photo: File) => void,
    saveProfile: (formData: UserProfileType) => Promise<any>
}

export type ProfileDataType = {
    profile: UserProfileType,
    isOwner: boolean,
    goToEditMode?: () => void
}

type ContactType = {
    contactValue: string,
    contactTitle: string
}

export type FormProfileDataType = {
    fullName: string
}


export const DescriptionBlock = (props: DescriptionBlockPropsType) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    //FIX ANY!!!
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement> ) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: UserProfileType) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }

    return <div className={style.description}>
        <div>
            <img className={style.avatar} alt={"avatar"}
                 src={props.profile.photos.large || userPhoto}/>
        </div>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
            <ProfileData isOwner={props.isOwner} profile={props.profile} goToEditMode={() => {
                setEditMode(true)
            }}/>}
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

        <div>
            {props.profile.aboutMe}
        </div>
    </div>
}


export const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (<div>
        <b>{contactTitle}</b>: {contactValue}
    </div>)
}

const ProfileData = (props: ProfileDataType) => {
    return (<div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>edit</button>
            </div>}
            <h2>{props.profile.fullName}</h2>

            <div>
                <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                // @ts-ignore
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} key={key}/>
            })}
            </div>
        </div>
    )
}



