import { combineReducers, Reducer } from 'redux'
import { AuthActions } from './';

const LoginReducer : Reducer= (state="hellooo", action ) => {
    switch (action.type) {
        case AuthActions.LOGIN_TO_WEBSITE_FAIILED:
            console.log(action.error)
            return state;
        
        case AuthActions.LOGIN_TO_WEBSITE_SUCCESS :
            console.log(action.user);
            return state;
        default:
            return state;
    }
}


export default combineReducers({
    login : LoginReducer
})