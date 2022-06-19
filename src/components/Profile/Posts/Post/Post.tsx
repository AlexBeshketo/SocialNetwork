import p from './Post.module.css'
import React from "react";
import {Avatar} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';


type PostType = {
    message: string,
    like: number,
    follow: number,
    id: number
}

let Post = ({message, like, follow}: PostType) => {


    return (
        <>
            <div className={p.item}>
                <div id={p.chat}>
                    <div className={p.one}><Avatar sx={{width: 56, height: 56}}
                                                   src='https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg'/>
                    </div>
                    <div className={p.two}> {message}</div>
                </div>

            </div>


            <div style={{paddingLeft: '300px'}}>
                <span><FavoriteBorderIcon color={'primary'}/>12 </span>
                <span><ShareIcon/> </span>
            </div>


        </>
    )
}

export default Post
