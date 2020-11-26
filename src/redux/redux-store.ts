import {combineReducers, createStore} from "redux";
import {asideReducer} from "./aside-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";

let reducers = combineReducers({
    asideState: asideReducer,
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer
})

export let store = createStore(reducers)