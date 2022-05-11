import {ActionTypes} from "./redux-store";


export type DialogsPageType = {
    users: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>,
    newMessagesBody: string
}
export type DialogsPropsType = {
    name: string,
    id: number
}
export type MessagesPropsType = {
    message: string,
    id: number,
}


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

export const messagesReducer = (state: DialogsPageType = initialStateOfDialogsPage, action: ActionTypes): DialogsPageType => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE":

            return {...state, newMessagesBody: action.text};

        case "ADD-NEW-MESSAGE":
            let text = state.newMessagesBody;

            return {
                ...state,
                newMessagesBody: '',
                messages: [...state.messages, {id: 5, message: text}]
            };

        default:
            return state

    }
};

