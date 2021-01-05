import React from 'react';
import './Header.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {ReduxRootStateType} from "../../redux/redux-store";



type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    getAuthUserData:() => void

}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)