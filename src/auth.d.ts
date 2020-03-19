type AuthEmail = string
type AuthPassword = string
type AuthToken = string
type Authenticated = boolean
type AuthConfirmPassword = string

type AuthPath = string;

interface Login {
    isAuth : Authenticated
    email? : AuthEmail
    token? : AuthToken
}

interface Signup {
    email : AuthEmail
    password : AuthPassword
    confirmPassword : AuthConfirmPassword
}

interface ForgotPassword {
    email : AuthEmail
}