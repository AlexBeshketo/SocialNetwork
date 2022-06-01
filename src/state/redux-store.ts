import {applyMiddleware, combineReducers, createStore, legacy_createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {messagesReducer} from "./messages-reducer";

import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";  ///thunk




export const rootReducer=combineReducers({
    profilePage: profileReducer,
    sideBar:sidebarReducer,
    dialogsPage:messagesReducer,
    usersPage: usersReducer,
    auth: authReducer

    })


export type AppStateType = ReturnType<typeof rootReducer>

const store: Store<AppStateType, any>  = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

//store.getState()  пишем в консоли
