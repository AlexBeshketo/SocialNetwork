import {ActionTypes, SideBarPageType} from "./state";


let initialStateOfSideBar = {
    names: [
        {name: 'Sveta', id: 1},
        {name: 'Kolya', id: 2},
        {name: 'Masha', id: 3},
        {name: 'Natasha', id: 4}
    ],
    isTrue: true
}


export const sidebarReducer = (sidebar: SideBarPageType=initialStateOfSideBar, action: ActionTypes) => {


    return sidebar

};
