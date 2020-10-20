import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import DescriptionBlock from "./DescriptionBlock/DescriptionBlock";

const Profile = () => {
    return <div>
        <DescriptionBlock/>
        <MyPosts/>
    </div>
}

export default Profile