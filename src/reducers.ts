import { combineReducers, Reducer } from 'redux'
import { AuthActions } from './';

const LoginReducer : Reducer= (state="hellooo", action ) => {
    switch (action.type) {
        case AuthActions.LOGIN_TO_WEBSITE:
            console.log(state)
            return state;
    
        default:
            return state;
    }
}


export default combineReducers({
    login : LoginReducer
})