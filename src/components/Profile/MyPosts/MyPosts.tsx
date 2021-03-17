import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from '../../../redux/store';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../commons/FormsControls/FormsControls";


type MyPostsPropsType = {
    profilePage: ProfilePageType,
    addPost: (newPostText: string) => void
}

type NewPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export class MyPosts extends React.PureComponent<MyPostsPropsType> {

    render() {
        const postsElement = this.props.profilePage.posts.map(post => <Post message={post.message}
                                                                            likesCount={post.likesCount}/>)

        const AddNewPost = (values: NewPostFormType) => {
            this.props.addPost(values.newPostText)
        }

        return <div className={style.item}>
            <h3>My posts</h3>
            <div className={style.postAdding}>
                <PostReduxForm onSubmit={AddNewPost}/>
            </div>
            {postsElement}
        </div>
    }
}

const PostForm: React.FC<InjectedFormProps<NewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} placholder={"Write text"} component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )

}

const PostReduxForm = reduxForm<NewPostFormType>({form: 'Post'})(PostForm)
