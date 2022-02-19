import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {ActionTypes, StorePropsType} from "./state/state";


type AppPropsType = {
    store: StorePropsType,
    dispatch: (action:ActionTypes )=> void
    }

function App ({dispatch, ...props}:AppPropsType) {


    let store= props.store.getState()

    const profilePage = store.profilePage
    const dialogs = store.dialogsPage.users
    const newMessagesBody=store.dialogsPage.newMessagesBody
    const messages = store.dialogsPage.messages
    const navbarPage = store.sideBar.names
    const navbarPageBoolean = store.sideBar.isTrue;

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar names={navbarPage} isTrue={navbarPageBoolean}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={profilePage} dispatch={dispatch}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs newMessagesBody={newMessagesBody} dispatch={dispatch} users={dialogs} messages={messages}/>}/>
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
