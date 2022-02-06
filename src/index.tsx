import React from 'react';
import './index.css';
import state, {addPost, RootePropsType, updatePost} from "./state/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export let rerenderEntireTree = (state:RootePropsType )=> {
    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <App state={state}  addPost={addPost}  updatePost={updatePost} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(state);



