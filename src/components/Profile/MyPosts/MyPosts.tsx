import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from '../../../redux/store';


type MyPostsPropsType = {
    profilePage: ProfilePageType,
    updateNewPostText:(text:string)=>void,
    addPost:()=>void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const postsElement =props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        if (props.profilePage.newPostText.trim()) {
            props.addPost()
            // props.dispatch(addPostActionCreator(props.newPostText))
        } else {
            props.updateNewPostText("")
            //props.dispatch(updateNewPostActionCreator(""))
        }
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostActionCreator(text))
    }

    return <div className={style.item}>
        <h3>My posts</h3>
        <div className={style.postAdding}>
            <div>
                <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
