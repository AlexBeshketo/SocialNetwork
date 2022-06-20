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

const Post = React.memo(({message, like, follow}: PostType) => {


    return (
        <>
            <div className={p.item}>
                <div id={p.talkbubble}>
                    <div className={p.one}><Avatar sx={{width: 56, height: 56}}
                                                   src='https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg'/>
                    </div>
                    <div className={p.two}>
                        <div className={p.message}>  {message}</div>
                        <div className={p.icons}>
                            <span><FavoriteBorderIcon color={'primary'}/>{like}</span>
                            <span><ShareIcon/>{follow}</span>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
})

export default Post
