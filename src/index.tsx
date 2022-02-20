import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {RootePropsType, store} from "./state/state";





const rerenderEntireTree = (state:RootePropsType)=> {

    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)}  />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree(store.getState());
store.subscribe(()=> {
    let state = store.getState()
    rerenderEntireTree(state)
})
