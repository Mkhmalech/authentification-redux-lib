import { combineReducers, Reducer } from 'redux'
import { AuthActions } from './Actions';

const LoginReducer : Reducer= (state="login", action ) => {
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

const SignupReducer : Reducer = (state="signup", action) =>{
    switch (action.type) {
        case "signup":   
            return {...state};
    
        default:
            return {...state};
    }
}

const ForgetPasswordReducer : Reducer = (state="forgetpassword", action)=>{
    switch (action.type) {
        case "forgetpassword":
            return {...state};    
        default:
            return {...state};
    }
}

export const authReducer = combineReducers({
    login : LoginReducer,
    signup : SignupReducer,
    forgetpassword : ForgetPasswordReducer
})