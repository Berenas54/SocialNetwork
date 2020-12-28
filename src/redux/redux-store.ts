import {combineReducers, createStore, Store} from "redux";
import {asideReducer} from "./aside-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    asideState: asideReducer,
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
export type ReduxRootStateType = ReturnType<typeof reducers>
export let store: Store = createStore(reducers)

// @ts-ignore
window.store = store