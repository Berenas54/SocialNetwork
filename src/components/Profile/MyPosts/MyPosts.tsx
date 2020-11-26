import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";


type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.dispatch(addPostActionCreator(props.newPostText))//addPostActionCreator(props.newPostText)
            //props.addPost(props.newPostText)
        } else {
            props.dispatch(updateNewPostActionCreator(""))//updateNewPostActionCreator
            //props.updatePostText("")
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updatePostText(event.currentTarget.value)
        props.dispatch(updateNewPostActionCreator(event.currentTarget.value))//dispatch?
    }

    return <div className={style.item}>
        <h3>My posts</h3>
        <div className={style.postAdding}>
            <div>
                <textarea value={props.newPostText} onChange={changeHandler}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
