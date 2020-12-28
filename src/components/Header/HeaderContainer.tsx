import React from 'react';
import './Header.css';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {ReduxRootStateType} from "../../redux/redux-store";
import {userAPI} from "../../api/api";


type HeaderPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void,
    isAuth: boolean,
    login: string | null

}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        userAPI.getLogin().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)