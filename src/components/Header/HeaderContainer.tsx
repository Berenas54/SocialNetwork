import React from 'react';
import './Header.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {ReduxRootStateType} from "../../redux/redux-store";


export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout})(HeaderContainer)