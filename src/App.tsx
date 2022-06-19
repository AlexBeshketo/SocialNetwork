import React from "react";
import './App.css';

import {Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";


import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {AppStateType} from "./state/redux-store";
import UsersAPIContainer from "./components/Users/UsersContainer";
import {messagesReducerActionsType} from "./state/messages-reducer";
import {profileReducerActionsType} from "./state/profile-reducer";
import {UsersACTypes} from "./state/users-reducer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {ProfileWithParam} from "./components/Profile/ProfileWithParam";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginComponent from "./components/Login/LoginComponent";
import Footer from "./components/Footer/Footer";


type ActionTypes = profileReducerActionsType | messagesReducerActionsType | UsersACTypes


export type AppPropsType = {
    store: AppStateType,
    dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {


    // let store= props.store.getState()
    // //
    // // const profilePage = store.profilePage
    // // const dialogs = store.dialogsPage.users
    // // const newMessagesBody=store.dialogsPage.newMessagesBody
    // // const messages = store.dialogsPage.messages
    // const navbarPage = store.sideBar.names
    // const navbarPageBoolean = store.sideBar.isTrue;


    return (

        <div className='main-container-grid'>
            <div className="Header">
                <HeaderContainer/>
            </div>
            <div className="Navbar">
                <NavbarContainer/>
            </div>

            <div className='Content'>

                <Routes>

                        <Route path={'/profile'} element={<ProfileContainer/>}/>

                    <Route path={'/profile/:userId'} element={<ProfileWithParam/>}/>
                    <Route path={'/users'} element={<UsersAPIContainer/>}/>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>

                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/login'} element={<LoginComponent/>}/>

                </Routes>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>

    )
}

export default App;


// <div className="container">
//     <div className="Header"></div>
//     <div className="Navbar"></div>
//     <div className="Footer"></div>
//     <div className="Content"></div>
// </div>