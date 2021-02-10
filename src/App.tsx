import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import {ReduxRootStateType} from "./redux/redux-store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppStatePropsType = {
    state: ReduxRootStateType
}

function App(props: AppStatePropsType) {
    return (<div className='app_wrapper'>
            <HeaderContainer/>
            <Navbar state={props.state}/>
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

export default App;
