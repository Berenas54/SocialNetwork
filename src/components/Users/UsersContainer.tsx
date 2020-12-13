import {UsersType} from "./Users";
import {Users} from "./Users";
import {connect} from "react-redux";

import {ReduxRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {follow, setUsers, unfollow} from "../../redux/users-reducer";

type MSTPType = {
    users: any
}

type MDTPType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: any) => void
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsers(users))


        }
    }
}

export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, mapDispatchToProps)(Users)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)