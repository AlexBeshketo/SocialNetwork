import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
//import {store} from "./state/state";
import store, {AppStateType} from "./state/redux-store";
import {Provider} from "react-redux";
import {Store} from "redux";


const rerenderEntireTree = (state: Store<AppStateType, any>) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,

        document.getElementById('root')
    );

}
rerenderEntireTree(store);
store.subscribe(() => {
    //let state = store.getState()
    rerenderEntireTree(store)
})
