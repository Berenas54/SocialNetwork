import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { RootStateType } from './redux/state'
type AppStatePropsType= {
    state:RootStateType
}
function App(props:AppStatePropsType) {
    return (<BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;