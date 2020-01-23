declare type AuthEmail = string
declare type AuthPassword = string
declare type AuthConfirmPassword = string

interface Login {
    email : AuthEmail
    password : AuthPassword
}

interface Signup {
    email : AuthEmail
    password : AuthPassword
    confirmPassword : AuthConfirmPassword
}

interface ForgotPassword {
    email : AuthEmail
}