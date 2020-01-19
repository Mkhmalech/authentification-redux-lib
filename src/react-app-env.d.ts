/// <reference types="react-scripts" />
type AuthEmail = string
type AuthPassword = string
type AuthConfirmPassword = string

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
