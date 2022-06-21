import React from "react";
import {AllDialogsPropsType} from "../DialogsContainer";
import h from '../Dialogs.module.css'
import {TextInputMessageForm} from "../../Profile/Posts/AddPostForm/TextInputMessageForm";
import {Avatar} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";


function Dialogs({messages, addNewMessage}: AllDialogsPropsType) {

    //// messages
    // let dialogsElements = messages.map((d) =>
    //
    //     <DialogsUsers name={d.user} key={d.id}
    //                   id={d.id}/>)
    //
    // let messagesElements =
    //     messages.map((m: { message: string; id: string }) =>
    //         <Messages key={m.id} message={m.message}/>
    //     )


    return (
        <>
            <div className={h.main}>
                <div style={{textAlign: 'center', paddingTop: '30px'}}>
                    <h2>Messages</h2>
                </div>
                <div>
                    {messages.map((d) =>
                        <div className={h.item}>
                            <div id={h.talkbubble}>
                                <div className={h.one}><Avatar sx={{width: 56, height: 56}}
                                                               src='https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg'/>
                                </div>
                                <div className={h.two}>
                                    <div>{d.user}</div>
                                    <div className={h.message}>{d.message}</div>
                                    <div className={h.icons}>
                                        <span><FavoriteBorderIcon color={'primary'}/> </span>
                                        <span><ShareIcon/> </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={h.addMessageBorder}>
                    <TextInputMessageForm buttonType={'addMessage'} addPost={addNewMessage}/>

                </div>
            </div>
        </>
    )
}

export default Dialogs


// <MessageForm addNewMessage={addNewMessage}/>