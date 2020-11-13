import React, {RefObject} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: PostType[]
    addPost: () => void
    updatePostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost()

        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updatePostText(text)
        }
    }

    return <div className={style.item}>
        <h3>My posts</h3>
        <div className={style.postAdding}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        {postsElement}
    </div>
}
export default MyPosts