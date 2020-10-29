import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import { RootStateType } from './redux/state'
import { Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
type AppStatePropsType= {
    state:RootStateType
}
function App(props:AppStatePropsType) {
    return (<div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <Sidebar asideState={props.state.asideState}/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                </div>
            </div>
    );
}

export default App;