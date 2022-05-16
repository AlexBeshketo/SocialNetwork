import p from './Post.module.css'
import React from "react";




type PostType= {
    message: string,
    like: number,
    follow : number,
    id:number
}

let Post = ({message, like, follow}:PostType) => {

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
