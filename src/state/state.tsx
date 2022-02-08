import React from "react";
import {rerenderEntireTree} from "../index";





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
    messages: Array<MessagesPropsType>
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
export type updatePostPropsType = (newText: string) => void
export type addPostPropsType = (postMessage: string) => void
export type rerenderPropsType= () => void

export type storePropsType = {
    _state:RootePropsType,
    getState:()=> RootePropsType
    addPost:addPostPropsType,
    updatePost:updatePostPropsType,
    _onChange: ()=> void,
    subscribe: (callback: ()=> void) => void

}


export const store:storePropsType = {
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
            ]
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
    addPost() {
        let newPost: PostsPropsType = {
            id: new Date().getTime(),
            message:  this._state.profilePage.newPost,
            like: 0,
            follow: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = ''
        this._onChange()
    },
    updatePost  (newText: string)  {
        this._state.profilePage.newPost = (newText)
        this._onChange()
    },
    _onChange () {
        console.log('state changed')
    },
    subscribe (callback) {
        this._onChange=callback
    }
}



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







