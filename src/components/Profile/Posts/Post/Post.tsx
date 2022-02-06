import p from './Post.module.css'
import {PostsPropsType} from "../../../../state/state";
import React from "react";

let Post = ({message, like, follow}:PostsPropsType) => {

    return (
        <>

            <div className={p.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg'/>
                {message}

                <div>
                <span>Like {like} </span>
                <span>Follow {follow} </span>
                </div>
                </div>

        </>
    )
}
export default Post
