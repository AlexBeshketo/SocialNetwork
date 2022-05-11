import {
    AddNewMessageActionCreator, DialogsPropsType,
    MessagesPropsType,
    updateNewMessageActionCreator
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
    addPost: ()=> void
    onChangeCallback: (text:string)=> void
}

export type AllDialogsPropsType = MSTPType & MDTPType

let mapStateToProps = (state:AppStateType):MSTPType => {
    return {
        users: state.dialogsPage.users,
        messages: state.dialogsPage.messages,
        newMessagesBody: state.dialogsPage.newMessagesBody

    }
}

let mapDispatchToProps = (dispatch:Dispatch):MDTPType => {
    return {
        addPost : ()=> {
            dispatch(AddNewMessageActionCreator())
        },
        onChangeCallback: (text:string)=> {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

