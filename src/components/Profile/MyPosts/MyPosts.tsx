import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
    updatePostText: (newText: string) => void
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        if (props.newPostText.trim()) {
            props.addPost(props.newPostText)
        } else {
            props.updatePostText("")
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(event.currentTarget.value)
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
