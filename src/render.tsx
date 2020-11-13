import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, RootStateType, updateNewPostText} from "./redux/state";

export let rerenderEntireTree =(state:RootStateType)=>{
ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost} addMessage={addMessage} updatePostText={updateNewPostText}/>
        </BrowserRouter>,
    document.getElementById('root')
);}

serviceWorker.unregister();
