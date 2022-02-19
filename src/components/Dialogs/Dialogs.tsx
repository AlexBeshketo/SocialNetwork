import h from './Dialogs.module.css'
import {Messages} from "./Messages/Messages";
import {DialogsItem} from './DialogItem/DialogsItem'
import {
    ActionTypes,
    DialogsPropsType,
    MessagesPropsType,

} from "../../state/state";
import React, {ChangeEvent} from "react";
import {AddNewMessageActionCreator, updateNewMessageActionCreator} from "../../state/messages-reducer";


type DialogsType = {
    users: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>,
    dispatch: (action: ActionTypes) => void,
    newMessagesBody : string


}

function Dialogs(props: DialogsType) {


    let dialogsElements = props.users.map((d: { name: string; id: number; }) => <DialogsItem name={d.name} key={d.id}
                                                                                             id={d.id}/>)

    let messagesElements =
        props.messages.map((m: { message: string; id: number }) => <Messages key={m.id} message={m.message}/>)

    const addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.dispatch(AddNewMessageActionCreator())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={h.dialogs}>
            <div className={h.usersList}>
                {dialogsElements}
            </div>

            <div className={h.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onChange} value={props.newMessagesBody} placeholder={'Enter your message'}>ADD message</textarea></div>
                    <div>
                        <button onClick={addPost}>Add message</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs
