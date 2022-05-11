import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ActionTypes, AppStateType} from "./state/redux-store";





export type AppPropsType = {
    store: AppStateType,
    dispatch: (action: ActionTypes  )=> void
    }

function App (props:AppPropsType) {


    // let store= props.store.getState()
    // //
    // // const profilePage = store.profilePage
    // // const dialogs = store.dialogsPage.users
    // // const newMessagesBody=store.dialogsPage.newMessagesBody
    // // const messages = store.dialogsPage.messages
    // const navbarPage = store.sideBar.names
    // const navbarPageBoolean = store.sideBar.isTrue;

    //debugger;


    return (

        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer store={props.store}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile store={props.store}/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer store={props.store}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>

                </Routes>
                {/*<Profile/>*/}
                {/*<Dialogs/>*/}
            </div>
        </div>
    )
}

export default App;
