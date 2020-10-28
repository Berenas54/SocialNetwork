import React from 'react';
//import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import DescriptionBlock from "./ProfileInfo/DescriptionBlock";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}



const Profile = (props:ProfilePropsType) => {
    return <div>
        <DescriptionBlock/>
        <MyPosts posts={props.profilePage.posts}/>
    </div>
}

export default Profile