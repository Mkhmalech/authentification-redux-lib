"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Actions_1 = require("./Actions");
var Auth = /** @class */ (function () {
    function Auth() {
        var _this = this;
        this.setEmail = function (email) { return _this.Email = email; };
        this.setPassword = function (password) { return _this.Password = password; };
        this.goIn = function (dispatch) {
            dispatch({
                type: Actions_1.AuthActions.USER_ASK_LOGIN_TO_WEBSITE,
                payload: { email: _this.Email, password: _this.Password }
            });
        };
    }
    return Auth;
}());
exports.Auth = Auth;
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Login;
}(Auth));
var Signup = /** @class */ (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setConfirmPassword = function (cp) { return _this.confirmPassword = cp; };
        return _this;
    }
    return Signup;
}(Auth));
var ForgotPassword = /** @class */ (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ForgotPassword;
}(Auth));
