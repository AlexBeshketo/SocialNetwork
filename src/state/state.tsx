
import {addPostActionCreator, profileReducer, updatePostActionCreator} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {AddNewMessageActionCreator, messagesReducer, updateNewMessageActionCreator} from "./messages-reducer";

export type PostsPropsType = {
    id: number,
    message: string,
    like: number,
    follow: number
}
export type DialogsPropsType = {
    name: string,
    id: number
}
export type MessagesPropsType = {
    message: string,
    id: number,
}
export type ProfilePageType = {
    posts: Array<PostsPropsType>,
    newPost: string
}
export type DialogsPageType = {
    users: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>,
    newMessagesBody: string
}
export type SideBarPageType = {
    names: Array<DialogsPropsType>,
    isTrue: boolean
}

export type RootePropsType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sideBar: SideBarPageType,
}

export type rerenderPropsType = () => void

export type StorePropsType = {
    _state: RootePropsType,
    getState: () => RootePropsType
    // addPost:addPostPropsType,
    // updatePost:updatePostPropsType,
    _onChange: () => void,
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionTypes) => void

}

export type ActionTypes =
    addPostActionType
    | updatePostActionType
    | updateNewMessageActionType
    | ADDNewMessageActionType

// export type AddPostActionType= {
//     type:"ADD-POST",
//
// }
// export type UpdatePostActionType= {
//     type:"UPDATE-POST",
//     newText: string
//     }


export type addPostActionType = ReturnType<typeof addPostActionCreator>
export type updatePostActionType = ReturnType<typeof updatePostActionCreator>
export type updateNewMessageActionType = ReturnType<typeof updateNewMessageActionCreator>
export type ADDNewMessageActionType = ReturnType<typeof AddNewMessageActionCreator>







export const store: StorePropsType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 2, follow: 2},
                {id: 2, message: 'Its my first post ', like: 1, follow: 2},
            ],
            newPost: 'It-kamasutra'
        },
        dialogsPage: {
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
        },
        sideBar: {
            names: [
                {name: 'Sveta', id: 1},
                {name: 'Kolya', id: 2},
                {name: 'Masha', id: 3},
                {name: 'Natasha', id: 4}
            ],
            isTrue: true
        }
    },
    getState() {
        return this._state
    },

    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {

        this._state.profilePage= profileReducer(this._state.profilePage, action)
        this._state.sideBar= sidebarReducer(this._state.sideBar, action)
        this._state.dialogsPage= messagesReducer(this._state.dialogsPage, action)
        this._onChange()
        }
    }


// export type ActionTypes= addPostActionType| updatePostActionType

// let onChange= ()=> {
//     console.log('hello')
// }


//
// const state: RootePropsType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hi, how are you?', like: 2, follow: 2},
//             {id: 2, message: 'Its my first post ', like: 1, follow: 2},
//         ],
//         newPost: 'It-kamasutra'
//     },
//     dialogsPage: {
//         users: [
//             {name: 'Sveta', id: 1},
//             {name: 'Kolya', id: 2},
//             {name: 'Masha', id: 3},
//             {name: 'Natasha', id: 4},
//         ],
//         messages: [
//             {message: 'Hi , how are you ?', id: 1},
//             {message: 'What is the weather today?', id: 2},
//             {message: 'Common, guy', id: 3},
//             {message: 'Are you nigger?', id: 4},
//         ]
//     },
//     sideBar: {
//         names: [
//             {name: 'Sveta', id: 1},
//             {name: 'Kolya', id: 2},
//             {name: 'Masha', id: 3},
//             {name: 'Natasha', id: 4}
//         ],
//         isTrue: true
//     }
// }


// export const addPost = () => {
//
//     let newPost: PostsPropsType = {
//         id: new Date().getTime(),
//         message: state.profilePage.newPost,
//         like: 0,
//         follow: 0
//     };
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPost = ''
//     rerenderEntireTree()
// }







