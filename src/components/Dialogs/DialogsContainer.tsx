import {AddNewMessageActionCreator, updateNewMessageActionCreator} from "../../state/messages-reducer";
import Dialogs from "./Dialogs";
import {StorePropsType} from "../../state/state";
import React from "react";


type DialogsContainerType = {
 store:StorePropsType
}

export function DialogsContainer(props: DialogsContainerType) {

    const store=props.store.getState()

    const addPost = () => {
        props.store.dispatch(AddNewMessageActionCreator())
    }

    const onChangeCallback = (text:string) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <Dialogs users={store.dialogsPage.users} messages={store.dialogsPage.messages}
                 newMessagesBody={store.dialogsPage.newMessagesBody} addPost={addPost}  onChangeCallback={onChangeCallback} />

    )
}