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


let initialStateOfDialogsPage = {
           users: [
            {name: 'Sveta', id: 1},
            {name: 'Kolya', id: 2},
            {name: 'Masha', id: 3},
            {name: 'Natasha', id: 4},
        ],
        messages: [
            {message: 'Hi , how are you ?', id: 1},
            {message: 'What is the weather today?', id: 2},
            {message: 'Common, guy', id: 3},
            {message: 'Are you nigger?', id: 4},
        ],
        newMessagesBody: ''
    }

export const messagesReducer = (dialogsPage: DialogsPageType = initialStateOfDialogsPage, action: ActionTypes) => {

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

