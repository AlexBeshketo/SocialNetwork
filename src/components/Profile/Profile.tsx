import ProfileInfo from "./AvaInfo/ProfileInfo";
import React, {useEffect} from "react";
import p from './Profile.module.css'

import PostsContainer from "./Posts/./PostsContainer";

import {ProfileType} from "../../state/profile-reducer";




export type ProfilePostType = {
    profile: ProfileType
    isFetching:boolean
    status: string
    updateStatus: (status: string) => void

}

function Profile(props:ProfilePostType) {



    return (
        <div className={p.main}>
            <ProfileInfo {...props}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
