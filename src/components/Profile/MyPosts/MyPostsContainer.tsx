import React from 'react';
import {ActionsTypes, RootStateType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}
//let state= ??
export const MyPostsContainer = (props: MyPostsPropsType) => {
    //const postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    const addPost = () => {
        if (props.state.profilePage.newPostText.trim()) {
            props.dispatch(addPostActionCreator(props.state.profilePage.newPostText))
        } else {
            props.dispatch(updateNewPostActionCreator(""))
        }
    }

    const changeHandler = (text: string) => {
        // let text = event.currentTarget.value
        //props.updateNewPostText(text)
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (<MyPosts posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}
                     dispatch={props.dispatch} updateNewPostText={changeHandler} addPost={addPost}/>

    )
}
