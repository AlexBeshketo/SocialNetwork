import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {messagesReducer} from "./messages-reducer";


let reducers=combineReducers({
    profilePage: profileReducer,
    sideBar:sidebarReducer,
    dialogsPage:messagesReducer

})

let store= createStore(reducers)

export default store


