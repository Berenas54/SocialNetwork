import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { PostType } from './components/Profile/MyPosts/Post/Post';

export type PostsType = { posts: Array<PostType> }


function App(props: PostsType) {
    return (<BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;