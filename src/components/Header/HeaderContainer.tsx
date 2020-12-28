import React from 'react';
import './Header.css';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {ReduxRootStateType} from "../../redux/redux-store";

type ResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}

type testPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void,
    isAuth: boolean,
    login: string | null

}

class HeaderContainer extends React.Component<testPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
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