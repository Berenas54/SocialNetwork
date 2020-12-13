import {ActionsTypes, ProfilePageType, RootStateType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

type MSTPType = {
    profilePage: ProfilePageType
}

type MDTPType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: (actions: ActionsTypes) => void): MDTPType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)