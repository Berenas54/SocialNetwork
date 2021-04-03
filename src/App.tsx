import React from "react";
import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {ReduxRootStateType, store} from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/commons/Preloader/Preloader";
import {AsideStateType} from "./redux/store";
import {withSuspense} from "./hoc/withSuspense";


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

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component<AppStatePropsType & dispatchPropsType & mapStateToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Navbar state={this.props.asideState}/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={withSuspense(UsersContainer)}/>
                    <Route path='/login'
                           render={withSuspense(Login)}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxRootStateType) => ({
    initialized: state.app.initialized,
    asideState: state.asideState
})
let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>)
}