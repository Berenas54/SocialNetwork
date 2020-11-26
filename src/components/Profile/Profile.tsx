import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfilePropsType) => {
    return <div>
        <DescriptionBlock/>
        <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
    </div>
}

