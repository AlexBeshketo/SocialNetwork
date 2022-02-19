import {ActionTypes, DialogsPageType} from "./state";


export const updateNewMessageActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        text: text
    } as const
}

export const AddNewMessageActionCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE',
    } as const
}

export const messagesReducer = (dialogsPage: DialogsPageType, action: ActionTypes) => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE":
            dialogsPage.newMessagesBody = action.text
            return dialogsPage
        case "ADD-NEW-MESSAGE":
            let text = dialogsPage.newMessagesBody
            dialogsPage.newMessagesBody = ''
            dialogsPage.messages.push({id: 5, message: text})
            return dialogsPage
        default:
            return dialogsPage
    }
};

