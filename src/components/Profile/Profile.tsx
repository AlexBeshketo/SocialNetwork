import ProfileInfo from "./AvaInfo/ProfileInfo";
import {StorePropsType,} from "../../state/state";
import React from "react";
import k from './Profile.module.css'
import ContainerPosts from './Posts/./PostsContainer'

type ProfilePostType = {
    store: StorePropsType
}

function Profile(props: ProfilePostType) {
    return (
        < div className={k.content}>
            <ProfileInfo/>
            <ContainerPosts store={props.store}/>
        </div>
    )
}

export default Profile
