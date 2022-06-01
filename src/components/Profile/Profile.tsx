import ProfileInfo from "./AvaInfo/ProfileInfo";
import React from "react";
import k from './Profile.module.css'

import PostsContainer from "./Posts/./PostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {ProfileType} from "../../state/profile-reducer";
import ProfileInfo2 from "./AvaInfo/ProfileInfo2";



export type ProfilePostType = {
    profile: ProfileType
    isFetching:boolean
}

function Profile(props:ProfilePostType) {
    return (
        < div className={k.content}>
            <ProfileInfo {...props}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
