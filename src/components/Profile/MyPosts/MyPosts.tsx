import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {message: "My first post!", value: 41},
    {message: "Second post", value: 22},
    {message: 'I live React', value: 31},
]
let postsElement = posts.map(post => <Post message={post.message} value={post.value}/>)
const MyPosts = () => {
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