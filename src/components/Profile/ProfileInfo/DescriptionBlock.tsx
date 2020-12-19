import React from 'react';
import style from './DescriptionBlock.module.css';
import {Preloader} from "../../commons/Preloader/Preloader";
import {UserProfileType} from "../../../redux/profilePage-reducer";

type DescriptionBlockPropsType = {
    profile: UserProfileType
}

export const DescriptionBlock = (props: DescriptionBlockPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img className={style.background} alt='cats'
                 src='https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'/>
        </div>
        <div>
            <img className={style.avatar} alt="ava"
                 src={props.profile.photos.large}/>
        </div>
        <div className={style.description}>
            Description
        </div>
    </div>
}
