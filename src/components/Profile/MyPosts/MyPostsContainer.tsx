import React from 'react';
import {ActionsTypes, ProfilePageType, RootStateType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

type MSTPType = {
    profilePage: ProfilePageType
}

type MDTPType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

type PropsType = MSTPType & MDTPType


export const MyPostsContainer = (props: PropsType) => {
    return (
        <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    )
}
let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MDTPType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)