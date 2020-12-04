import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import { MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return <div>
        <DescriptionBlock/>
        <MyPostsContainer />
    </div>
}

