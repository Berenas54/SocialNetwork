import {combineReducers, createStore, Store} from "redux";
import {asideReducer} from "./aside-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";

let reducers = combineReducers({
    asideState: asideReducer,
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer
})
//type RootStateType = ReturnType<typeof reducers>
export let store: Store = createStore(reducers)

// @ts-ignore
window.store = store