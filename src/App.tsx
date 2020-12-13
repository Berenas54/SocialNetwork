import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import {ReduxRootStateType} from "./redux/redux-store";


type AppStatePropsType = {
    state: ReduxRootStateType
}

function App(props: AppStatePropsType) {
    return (<div className='app_wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app_wrapper_content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>

                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;