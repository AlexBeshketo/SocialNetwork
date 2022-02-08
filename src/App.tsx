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
import  { addPostPropsType, RootePropsType, updatePostPropsType} from "./state/state";


type AppPropsType= {
    state:RootePropsType,
    addPost:addPostPropsType,
    updatePost:updatePostPropsType
}

function App(props:AppPropsType) {

    const profilePage = props.state.profilePage
    const dialogs = props.state.dialogsPage.users
    const messages = props.state.dialogsPage.messages
    const navbarPage = props.state.sideBar.names
    const navbarPageBoolean=props.state.sideBar.isTrue;

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar names={navbarPage} isTrue={navbarPageBoolean} />

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile profilePage={profilePage} addPost={props.addPost}  updatePost={props.updatePost} />}/>
                    <Route path={'/dialogs'} element={<Dialogs users={dialogs} messages={messages} />}/>
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
