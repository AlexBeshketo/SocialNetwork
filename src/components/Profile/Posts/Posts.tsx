import Post from "./Post/Post";
import p from './Posts.module.css'

import React, {ChangeEvent} from "react";
import {AllPostsPropsType} from "./PostsContainer";
import {Button, TextField} from "@mui/material";





// let postsData = [
//     {id: 1, message: 'Hi, how are you?' , like: 2 , follow: 2} ,
//     {id: 1, message: 'Its my first post ' , like: 1 , follow: 2} ,
//
// ]

// type PostsPostType = {
//     posts: PostsPropsType[]
//     newPost: string
//     // addPost: addPostPropsType,
//     // updatePost: updatePostPropsType
//     addPost: ()=> void
//     onChangeCallback: (text:string)=> void
// }


function Posts(props: AllPostsPropsType) {

    let postsElement = props.posts
        .map((p => <Post key={p.id} id={p.id} message={p.message} like={p.like} follow={p.follow}/>))

    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.addPost()
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value)
    }

    return (
        <div className={p.item}>
            <div>
                <h2>My posts</h2>
            </div>


            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter your message"
                    multiline
                    color={'info'}
                    style={{width: '600px'}}
                    rows={6}
                    defaultValue="Default Value"
                    value={props.newPost} onChange={onChange}/>

            </div>
            <div className={p.btn_container}>
                <Button className={p.btn}  variant='outlined'  onClick={addPost}>Add Post </Button>

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
