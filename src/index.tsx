import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./state/redux-store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,


    );


// rerenderEntireTree(store);
// store.subscribe(() => {
//     //let state = store.getState()
//     rerenderEntireTree(store)
// })
