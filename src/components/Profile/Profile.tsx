import React from 'react';
//import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import DescriptionBlock from "./ProfileInfo/DescriptionBlock";
import { PostsType } from '../../App';


const Profile = (props:PostsType) => {
    return <div>
        <DescriptionBlock/>
        <MyPosts posts={props.posts}/>
    </div>
}

export default Profile