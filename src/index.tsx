import './index.css';
import {state, subscribe, updateNewMessageText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, updateNewPostText} from "./redux/state";

let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} updatePostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
serviceWorker.unregister();
