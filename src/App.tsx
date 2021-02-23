import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import {ReduxRootStateType} from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/commons/Preloader/Preloader";
import {AsideStateType} from './redux/store';


type AppStatePropsType = {
    state: ReduxRootStateType
}
type dispatchPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    initialized: boolean,
    asideState: AsideStateType
}

class App extends React.Component<AppStatePropsType & dispatchPropsType & mapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        debugger
        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Navbar state={this.props.asideState}/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    initialized: state.app.initialized,
    asideState: state.asideState
})
export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
