import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./state/state";




const rerenderEntireTree = ( )=> {

    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)}  />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)




