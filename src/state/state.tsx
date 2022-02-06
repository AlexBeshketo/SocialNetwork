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


const state: RootePropsType = {
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
}


export type addPostPropsType = (postMessage:string)=>void

export const addPost = () => {

let newPost:PostsPropsType= {
    id: new Date().getTime(),
    message: state.profilePage.newPost,
    like: 0,
    follow: 0
};
    state.profilePage.posts.push(newPost)
    state.profilePage.newPost=''
    rerenderEntireTree(state)
}



export type updatePostPropsType = (newText:string)=>void

export const updatePost = (newText:string) => {
    state.profilePage.newPost=(newText)
    rerenderEntireTree(state)
}


export default state