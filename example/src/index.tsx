import * as React from "react";
import { render } from "react-dom";
import { createStore } from 'redux'
import {LoginReducer} from 'authentification-redux-lib'

import App from "./App";

import { Provider } from "react-redux";

const store = createStore(LoginReducer)

const rootElement = document.getElementById("root");
render(<Provider store={store}><App /></Provider>, rootElement);
