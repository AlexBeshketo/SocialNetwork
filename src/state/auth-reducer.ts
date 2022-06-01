import {loginAPI} from "../api/api";
import {Dispatch} from "redux";

export type dataStateofLoginType = {
    id: number,
    email: string,
    login: string
}

export type initialStateOfLoginType = {
    data: dataStateofLoginType
    resultCode: number,
    messages: any,
    isFetching?: boolean
}


let initialStateOfLogin = {
    data: {
        id: 1,
        email: 'fgh',
        login: 'fghfh'
    },
    resultCode: 123,
    messages: [],
    isFetching: true,
    isAuth: false
}

export const authReducer = (state: initialStateOfLoginType = initialStateOfLogin, action: authReducerType): any => {


    switch (action.type) {
        case "SET-USER-DATA":

            return {...state, ...action.data , isAuth:true};

        case "TOOGLE-IS-FETCHING":

            return {...state, isFetching : action.isFetching};
        default:
            return state

    }
};

type authReducerType= setUserDataACType | setToogleIsFetchingACType
export type setUserDataACType = ReturnType<typeof setUserData>
export type setToogleIsFetchingACType = ReturnType<typeof setToogleIsFetching>

export const setUserData = (data:dataStateofLoginType) => {
    return {
        type: 'SET-USER-DATA',
        data:data
    } as const
}
export const setToogleIsFetching= (isFetching:boolean) => {
    return {
        type:'TOOGLE-IS-FETCHING',
        isFetching: isFetching

    } as const
}





export const loginThunkCreator = ()=>{
return (dispatch:Dispatch) => {

    dispatch(setToogleIsFetching(true))

    loginAPI.getLogin()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
            dispatch (setToogleIsFetching(false))
        })
    }
}

