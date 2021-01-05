import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profilePage-reducer";


export type ProfilePropsType = {
    profile: UserProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return <div>
        <DescriptionBlock profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

