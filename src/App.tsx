import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {RootStateType} from './redux/state'
import {Route} from 'react-router-dom';

type AppStatePropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    addMessage: (message: string) => void
}

function App(props: AppStatePropsType) {
    return (<div className='app_wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app_wrapper_content">
                <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage} addMessage={props.addMessage}/>}/>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
            </div>
        </div>
    );
}

export default App;