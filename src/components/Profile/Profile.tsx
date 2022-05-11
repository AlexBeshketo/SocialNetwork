import ProfileInfo from "./AvaInfo/ProfileInfo";
import React from "react";
import k from './Profile.module.css'

import PostsContainer from "./Posts/./PostsContainer";
import {AppStateType} from "../../state/redux-store";


type ProfilePostType = {
    store: AppStateType
}

function Profile(props: ProfilePostType) {
    return (
        < div className={k.content}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile
