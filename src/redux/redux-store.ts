import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {asideReducer} from "./aside-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";
import {profilePageReducer} from "./profilePage-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    asideState: asideReducer,
    messagesPage: messagesPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
export type ReduxRootStateType = ReturnType<typeof reducers>
export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store