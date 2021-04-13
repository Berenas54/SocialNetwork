import React from 'react';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {ReduxRootStateType} from "../../redux/redux-store";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    saveProfile,
    updateStatus,
    UserProfileType
} from "../../redux/profilePage-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId
        } else {
            this.props.history.push("/login")
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {

        return (
            this.props.profile && <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}


            />
        )
    }
}

let mapStateToProps = (state: ReduxRootStateType) => ({
    "profile": state.profilePage.profile,
    "status": state.profilePage.status,
    "authorizedUserId": state.auth.id,
    "isAuth": state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)