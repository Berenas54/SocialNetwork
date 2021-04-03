import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profilePage-reducer";

export type ProfilePropsType = {
    isOwner: boolean
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => {},
    savePhoto: (photo: File) => {}
}

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <DescriptionBlock savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                          status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

