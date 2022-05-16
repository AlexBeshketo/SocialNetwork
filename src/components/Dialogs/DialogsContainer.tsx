import {
    addNewMessage,
    DialogsPropsType,
    MessagesPropsType, updateNewMessage,

} from "../../state/messages-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {Dispatch} from "redux";

// type DialogsContainerType = {
//     store: StorePropsType
// }
// export function DialogsContainer(props: DialogsContainerType) {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: StorePropsType) => {
//
//                     const getState = store.getState()
//
//                     const addPost = () => {
//                         store.dispatch(AddNewMessageActionCreator())
//                     }
//
//                     const onChangeCallback = (text: string) => {
//                         store.dispatch(updateNewMessageActionCreator(text))
//                     }
//
//                     return (
//
//                         <Dialogs users={getState.dialogsPage.users} messages={getState.dialogsPage.messages}
//                                  newMessagesBody={getState.dialogsPage.newMessagesBody}
//                                  addPost={addPost} onChangeCallback={onChangeCallback}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }


type MSTPType= {
    users: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>,
    newMessagesBody: string
}

type MDTPType= {
    addNewMessage: ()=> void
    updateNewMessage: (text:string)=> void
}

export type AllDialogsPropsType = MSTPType & MDTPType

let mapStateToProps = (state:AppStateType):MSTPType => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessagesBody: state.dialogsPage.newMessagesBody

    }
}

// let mapDispatchToProps = (dispatch:Dispatch):MDTPType => {
//     return {
//         addNewMessage ,
//         updateNewMessage
//     }
// }

export const DialogsContainer = connect(mapStateToProps, {addNewMessage ,updateNewMessage}) (Dialogs);

