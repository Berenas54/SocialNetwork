import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

let postsData = [
    {message: "My first post!", value: 41},
    {message: "Second post", value: 22},
    {message:'I live React', value: 31},
]
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
        <Post message={postsData[0].message} value={postsData[0].value}/>
        <Post message={postsData[1].message} value={postsData[1].value}/>
        <Post message={postsData[2].message} value={postsData[2].value}/>


    </div>
}
export default MyPosts