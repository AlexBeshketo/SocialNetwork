import Post from "./Post/Post";
import p from './Posts.module.css'

import React from "react";
import {AllPostsPropsType} from "./PostsContainer";
import {AddPostForm} from "./AddPostForm/AddPostForm";


function Posts({posts, addPost}: AllPostsPropsType) {

    let postsElement = posts
        .map((p => <Post key={p.id} id={p.id} message={p.message} like={p.like} follow={p.follow}/>))

    // const addPost = (newPostBody:string) => {
    //     props.addPost(newPostBody)
    // }

    // const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updatePost(e.currentTarget.value)
    // }

    return (
        <>
            {/*<div>*/}
            {/*    <h2>My posts</h2>*/}
            {/*</div>*/}

            <div className={p.posts}>
                {postsElement}
            </div>


                <div className={p.addPostBorder}>
                <AddPostForm addPost={addPost}/>
                </div>

        </>
    )
}

export default Posts
