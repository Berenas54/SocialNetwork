
import {getAuthUserData} from "./auth-reducer";


export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type initialStateType = {
    initialized: boolean
}

type initializedActionType = {
    type: typeof INITIALIZED_SUCCESS
}

let initialState = {
    initialized: false
}


export const appReducer = (state: initialStateType = initialState, action: initializedActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}
export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})
//пофиксить any
export const initializeApp = () => {
    return (dispatch:any) => {
let promise = dispatch(getAuthUserData())
     Promise.all([promise])
         .then(()=>{
         dispatch(initializedSuccess())
     })

    }
}