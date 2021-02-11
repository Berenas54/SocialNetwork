import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profilePage-reducer";

export type ProfilePropsType = {
    profile: UserProfileType
    status: string,
    updateStatus: (status: string) => {}
}

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <DescriptionBlock profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}

