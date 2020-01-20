// Actions Type
 export enum AuthActions {
    // Login Actions
    USER_ASK_LOGIN_TO_WEBSITE   = "@@auth/Login/USER_ASK_LOGIN_TO_WEBSITE",
    LOGIN_FETCHING_ACCOUNT         = "@@auth/Login/LOGIN_FETCH_ACCOUNT",
    LOGIN_TO_WEBSITE_FAIILED    = "@@auth/Login/LOGIN_TO_WEBSITE_FAIILED",
    LOGIN_TO_WEBSITE_SUCCESS    = "@@auth/Login/LOGIN_TO_WEBSITE_SUCCESS",
    // SignUp Actions
    USER_SIGNUP_WRITE_EMAIL     = "@@auth/Signup/USER_WRITE_EMAIL",
    USER_SIGNUP_WRITE_PASSWORD  = "@@auth/Signup/USER_WRITE_PASSWORD",
    USER_SUBMIT_DEMAND          = "@@auth/Signup/USER_SUBMIT_DEMAND",
    // Forget Password
    USER_FP_WRITE_EMAIL         = "@@auth/Forgotpassword/USER_FP_WRITE_EMAIL",
}