import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import { RootStateType} from './redux/store'
import {Route} from 'react-router-dom';
import {SuperDialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppStatePropsType = {
    state: RootStateType
}

function App(props: AppStatePropsType) {
    return (<div className='app_wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className="app_wrapper_content">
                <Route path='/dialogs'
                       render={() => <SuperDialogsContainer
                           // messagesPage={props.state.messagesPage}
                           //                             dispatch={props.dispatch}
                       />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
            </div>
        </div>
    );
}

export default App;