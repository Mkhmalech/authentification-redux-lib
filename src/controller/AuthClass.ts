import { Dispatch } from "redux";
import { AuthActions } from "../store/Actions";

export class Auth {

    private Email ? : AuthEmail ;
    private Password ? : AuthPassword ;

    
    constructor(){
        console.log("class is initialized");
    }

    setEmail = (email : AuthEmail) => this.Email = email;

    setPassword = ( password : AuthPassword ) => this.Password = password;

    goIn = (dispatch : Dispatch) => {
        dispatch({
            type : AuthActions.USER_ASK_LOGIN_TO_WEBSITE, 
            payload : {email : this.Email, password : this.Password}
        })
    }
}

class Login extends Auth {}

class Signup extends Auth {

    private confirmPassword : AuthEmail | undefined

    setConfirmPassword = (cp : AuthConfirmPassword) => this.confirmPassword = cp;
}

class ForgotPassword extends Auth {}