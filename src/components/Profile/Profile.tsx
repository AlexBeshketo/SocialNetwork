import Posts from "./Posts/Posts";
import ProfileInfo from "./AvaInfo/ProfileInfo";
import {addPostPropsType, PostsPropsType, updatePostPropsType} from "../../state/state";
import React from "react";
import k from './Profile.module.css'




type ProfilePostType = {
    profilePage: {
        posts: Array<PostsPropsType>
        newPost: string
    }
    addPost:addPostPropsType
    updatePost:updatePostPropsType
}

function Profile  (props:ProfilePostType)  {
    return (
        < div className={k.content}>
            <ProfileInfo/>

            <Posts posts={props.profilePage.posts} newPost={props.profilePage.newPost} addPost={props.addPost} updatePost={props.updatePost}/>

        </div>
    )
}
export default Profile
