import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import { SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return <div>
        <DescriptionBlock/>
        <SuperMyPostsContainer />
    </div>
}

