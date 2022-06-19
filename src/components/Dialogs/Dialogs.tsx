import {Messages} from "./Messages/Messages";
import {DialogsUsers} from './DialogItem/DialogsUsers'

import React from "react";
import {AllDialogsPropsType} from "./DialogsContainer";
import MessageForm from "./MessageForm/MessageForm";
import h from './Dialogs.module.css'


function Dialogs({messages, addNewMessage}: AllDialogsPropsType) {

    //// messages
    let dialogsElements = messages.map((d) =>

        <DialogsUsers name={d.user} key={d.id}
                      id={d.id}/>)

    let messagesElements =
        messages.map((m: { message: string; id: string }) =>
            <Messages key={m.id} message={m.message}/>
        )
    //////

    // const addNewMessage = (newMessageBody:string) => {
    //     props.addNewMessage(newMessageBody)
    // }



    return (
        <div className={h.main}>


            <div className={h.dialogs}>
                <div className={h.usersList}>
                    {dialogsElements}
                </div>

                <div className={h.messages}>
                    <div>{messagesElements}</div>

                </div>

            </div>
            <MessageForm addNewMessage={addNewMessage}/>
        </div>
    )
}

export default Dialogs
