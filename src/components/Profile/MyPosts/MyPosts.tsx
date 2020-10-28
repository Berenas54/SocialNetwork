import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType } from '../../../redux/state';


type MyPostsPropsType={
    posts:PostType[]
}

const MyPosts = (props:MyPostsPropsType) => {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

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