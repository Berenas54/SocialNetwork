import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={style.item}>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <Post message='My first post!' value={1}/>
        <Post message='Second post' value={2}/>
        <Post message='I live React' value={3}/>

    </div>
}
export default MyPosts