import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {ReduxRootStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profilePage-reducer";


class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)

        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: ReduxRootStateType) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
