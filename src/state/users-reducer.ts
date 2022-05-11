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

export type usersType= {id: number, followed: boolean, name: string, country: string, city: string }

export type initialStateOfDialogsPageType = {
    users: Array<usersType>
}


let initialStateOfUsersPage: initialStateOfDialogsPageType = {
    users: [
        // {id: 1, followed: false, name: 'Dmitrij', country: 'Ukraine', city: 'Kyiv'},
        // {id: 1, followed: false, name: 'Taras', country: 'Lithuania', city: 'Vilnius'},
        // {id: 1, followed: false, name: 'Ksenia', country: 'Latvia', city: 'Ryga'},
        // {id: 1, followed: false, name: 'Julija', country: 'Norvegia', city: 'Oslo'}
    ]
}


export const usersReducer = (state = initialStateOfUsersPage, action: UsersACTypes):initialStateOfDialogsPageType => {
    switch (action.type) {
        case  "FOLLOW" : {
return {...state, users: [...state.users.map(k=> k.id === action.id? {...k, followed: true} : k)] }
        }
        case  "UNFOLLOW" : {
            return {...state, users: [...state.users.map(k=> k.id === action.id? {...k, followed: false} : k)] }
        }
        case "SET-USER" : {
            return {...state, users: [ ...state.users,  ...action.users ] }
        }
        default:return state

    }
}

type UsersACTypes = followACType | unfollowACType |addUsersACACType
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type addUsersACACType = ReturnType<typeof addUsersAC>

export const followAC = (id:number) => {
    return {
        type: 'FOLLOW',
        id: id
    } as const
}

export const unfollowAC = (id:number) => {
    return {
        type: 'UNFOLLOW',
        id: id
    } as const
}

export const addUsersAC = (users:Array<usersType>) => {
    return {
        type: 'SET-USER',
        users:users

    } as const
}