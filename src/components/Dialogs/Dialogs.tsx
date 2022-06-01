import h from './Dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {DialogsItem} from './DialogItem/DialogsItem'

import React, {ChangeEvent, useEffect} from "react";
import {AllDialogsPropsType} from "./DialogsContainer";
import {useNavigate} from "react-router";



// type DialogsType = {
//     users: Array<DialogsPropsType>,
//     messages: Array<MessagesPropsType>,
//     newMessagesBody: string,
//     addPost: () => void,
//     onChangeCallback: (text: string) => void
//
//
// }

function Dialogs(props:AllDialogsPropsType) {

    let dialogsElements = props.users.map((d: { name: string; id: number; }) => <DialogsItem name={d.name} key={d.id}
                                                                                             id={d.id}/>)

    let messagesElements =
        props.messages.map((m: { message: string; id: number }) => <Messages key={m.id} message={m.message}/>)

    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.addNewMessage()
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }


    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth){
            return navigate("/login");
        }
    },[props.isAuth]);

    return (
        <div className={h.dialogs}>
            <div className={h.usersList}>
                {dialogsElements}
            </div>

            <div className={h.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onChange} value={props.newMessagesBody} placeholder={'Enter your message'}>ADD message</textarea></div>
                    <div><button onClick={addPost}>Add message</button></div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs
