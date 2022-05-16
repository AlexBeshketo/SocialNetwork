import ProfileInfo from "./AvaInfo/ProfileInfo";
import React from "react";
import k from './Profile.module.css'

import PostsContainer from "./Posts/./PostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import {ProfileType} from "../../state/profile-reducer";



type ProfilePostType = {
    profile: ProfileType
}

function Profile(props:ProfilePostType) {
    return (
        < div className={k.content}>
            <ProfileInfo {...props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
