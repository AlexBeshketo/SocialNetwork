import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {messagesReducer} from "./messages-reducer";
import {ADDNewMessageActionType, addPostActionType, updateNewMessageActionType, updatePostActionType} from "./state";
import {usersReducer} from "./users-reducer";

export type ActionTypes =
    addPostActionType
    | updatePostActionType
    | updateNewMessageActionType
    | ADDNewMessageActionType


export const rootReducer=combineReducers({
    profilePage: profileReducer,
    sideBar:sidebarReducer,
    dialogsPage:messagesReducer,
    usersPage: usersReducer

    })



export type AppStateType = ReturnType<typeof rootReducer>

const store: Store<AppStateType, any>  = createStore(rootReducer)



export default store


