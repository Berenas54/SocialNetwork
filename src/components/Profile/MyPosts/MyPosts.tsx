import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";



const MyPosts = (props:PostsType) => {
    let postsElement = props.posts.map(post => <Post message={post.message} value={post.value}/>)

    return <div className={style.item}>
        <h3>My posts</h3>
        <div className={style.postAdding}>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
export default MyPosts