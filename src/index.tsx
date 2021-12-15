import * as React from 'react';
import * as ReactDom from "react-dom";
import App from "./app";
import "./index.css"
import "react-toggle/style.css"
import store from "./app/store";
import {Provider} from "react-redux";
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));