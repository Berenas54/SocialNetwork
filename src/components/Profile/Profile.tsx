import React from 'react';
import {DescriptionBlock} from "./ProfileInfo/DescriptionBlock";
import {ActionsTypes, RootStateType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}


export const Profile = (props: ProfilePropsType) => {
    return <div>
        <DescriptionBlock/>
        <MyPostsContainer state={props.state} dispatch={props.dispatch} />
    </div>
}

