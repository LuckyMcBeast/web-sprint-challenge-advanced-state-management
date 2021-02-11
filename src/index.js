import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import axios from 'axios'

import "./index.css";
import App from "./App";
import rootReducer from './reducers';

const { worker } = require('./mocks/browser');
worker.start();
axios.get("http://localhost:3333/smurfs").then( res => console.log(res));
const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods. COMPLETE
//2. Create a store that includes thunk middleware support. COMPLETE
//3. Wrap the App component in a react-redux Provider element. COMPLETE