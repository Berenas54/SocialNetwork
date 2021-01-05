import React from 'react';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {ReduxRootStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profilePage-reducer";
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/Login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: ReduxRootStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
