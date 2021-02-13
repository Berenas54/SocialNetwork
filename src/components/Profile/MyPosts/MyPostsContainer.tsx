import {ActionsTypes, ProfilePageType, RootStateType} from '../../../redux/store';
import {addPostActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

type MSTPType = {
    profilePage: ProfilePageType
}

type MDTPType = {
    addPost: (newPostText:string) => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MDTPType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)