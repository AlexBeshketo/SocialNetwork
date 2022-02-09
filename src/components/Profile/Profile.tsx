import Posts from "./Posts/Posts";
import ProfileInfo from "./AvaInfo/ProfileInfo";
import {
    ActionTypes, PostsPropsType,
} from "../../state/state";
import React from "react";
import k from './Profile.module.css'




type ProfilePostType = {
    profilePage: {
        posts: Array<PostsPropsType>
        newPost: string
    }
    dispatch: (action:ActionTypes )=> void
}

function Profile  ({dispatch, ...props}:ProfilePostType )  {
    return (
        < div className={k.content}>
            <ProfileInfo/>

            <Posts posts={props.profilePage.posts} newPost={props.profilePage.newPost} dispatch={dispatch} />

        </div>
    )
}
export default Profile
