"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var _1 = require("./");
var LoginReducer = function (state, action) {
    if (state === void 0) { state = "hellooo"; }
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
exports.default = redux_1.combineReducers({
    login: LoginReducer
});
