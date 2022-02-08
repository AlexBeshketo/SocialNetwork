import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./state/state";




export let rerenderEntireTree = ( )=> {
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}  addPost={store.addPost.bind(store)}  updatePost={store.updatePost.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)




