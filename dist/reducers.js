"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var _1 = require("./");
var LoginReducer = function (state, action) {
    if (state === void 0) { state = "login"; }
    switch (action.type) {
        case _1.AuthActions.LOGIN_TO_WEBSITE_FAIILED:
            console.log(action.error);
            return state;
        case _1.AuthActions.LOGIN_TO_WEBSITE_SUCCESS:
            console.log(action.user);
            return state;
        default:
            return state;
    }
};
var SignupReducer = function (state, action) {
    if (state === void 0) { state = "signup"; }
    switch (action.type) {
        case "signup":
            return __assign({}, state);
        default:
            return __assign({}, state);
    }
};
var ForgetPasswordReducer = function (state, action) {
    if (state === void 0) { state = "forgetpassword"; }
    switch (action.type) {
        case "forgetpassword":
            return __assign({}, state);
        default:
            return __assign({}, state);
    }
};
exports.default = redux_1.combineReducers({
    login: LoginReducer,
    signup: SignupReducer,
    forgetpassword: ForgetPasswordReducer
});
