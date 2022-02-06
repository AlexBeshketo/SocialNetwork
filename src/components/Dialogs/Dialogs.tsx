import h from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Messages} from "./Messages/Messages";
import {DialogsItem} from './DialogItem/DialogsItem'
import {DialogsPageType, DialogsPropsType, MessagesPropsType} from "../../state/state";
import React from "react";



type DialogsType = {
        users: Array<DialogsPropsType>,
        messages: Array<MessagesPropsType>

}



function Dialogs(props:DialogsType) {


    let dialogsElements = props.users.map((d: { name: string; id: number; }) => <DialogsItem name={d.name} key ={d.id} id={d.id}/>)

    let messagesElements =
        props.messages.map((m: { message: string; }) => <Messages message={m.message}/>)


    return (
        <div className={h.dialogs}>
            <div className={h.usersList}>

                {dialogsElements}

            </div>

            <div className={h.messages}>
                {messagesElements}

            </div>
        </div>

    )
}

export default Dialogs
