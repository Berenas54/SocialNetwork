import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {message: "My first post!", value: 41},
    {message: "Second post", value: 22},
    {message: 'I live React', value: 31},
    {message: "Awesome!!!", value: 421},
]
// let dialogs = [
//     {id: 1, name: "Dzimych"},
//     {id: 2, name: "Sveta"},
//     {id: 3, name: "Pasha"},
//     {id: 4, name: "Gleb"},
//     {id: 5, name: "Vika"},
// ]
//
// let messages = [
//     {id: 1, message: "HI, brother!"},
//     {id: 2, message: "Wtf"},
//     {id: 3, message: "I love you"},
//     {id: 4, message: "Where is my money?"},
// ]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
