import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, RootStateType} from "./redux/state";

export let rerenderEntireTree =(state:RootStateType)=>{
ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>,
    document.getElementById('root')
);}

serviceWorker.unregister();