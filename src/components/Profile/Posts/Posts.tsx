import Post from "./Post/Post";
import p from './Posts.module.css'
import {
    ActionTypes,
    addPostActionCreator, addPostActionType,
    PostsPropsType,
    updatePostActionCreator, updatePostActionType,
} from "../../../state/state";
import React, {ChangeEvent} from "react";

// let postsData = [
//     {id: 1, message: 'Hi, how are you?' , like: 2 , follow: 2} ,
//     {id: 1, message: 'Its my first post ' , like: 1 , follow: 2} ,
//
// ]

type PostsPostType = {
    posts: PostsPropsType[]
    newPost: string
    // addPost: addPostPropsType,
    // updatePost: updatePostPropsType
    dispatch: (action: ActionTypes) => void
}





function Posts({dispatch, ...props}: PostsPostType) {


    let postsElement = props.posts
        .map((p => <Post key={p.id} id={p.id} message={p.message} like={p.like} follow={p.follow}/>))


    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {

        dispatch(addPostActionCreator())

    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {


        dispatch(updatePostActionCreator(e.currentTarget.value ))

    }

    return (
        <div className={p.item}>
            <div>
                <h2>My posts</h2>
            </div>
            <div>
                <textarea value={props.newPost} onChange={onChange}>ghjghj</textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={p.posts}>
                {postsElement}

            </div>
            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
            {/*<Post/>*/}
        </div>
    )
}

export default Posts
