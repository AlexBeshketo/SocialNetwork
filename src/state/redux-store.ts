import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {messagesReducer} from "./messages-reducer";

import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";




export const rootReducer=combineReducers({
    profilePage: profileReducer,
    sideBar:sidebarReducer,
    dialogsPage:messagesReducer,
    usersPage: usersReducer,
    auth: authReducer

    })


export type AppStateType = ReturnType<typeof rootReducer>

const store: Store<AppStateType, any>  = createStore(rootReducer)



export default store


