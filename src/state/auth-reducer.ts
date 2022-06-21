import {loginAPI} from "../api/api";
import {Dispatch} from "redux";
import {handleServerAppError} from "../utils/error-utils";


export type dataStateofLoginType = {
    id: number,
    email: string,
    login: string
}


export type LoginType = {
    email: string,
    password: string,
    rememberMe?: boolean
}

export type initialStateOfLoginType = {
    data: dataStateofLoginType
    resultCode: number,
    messages: any,
    isFetching?: boolean,
    error: string | null
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
    isAuth: false,
    error: ''

}

export const authReducer = (state: initialStateOfLoginType = initialStateOfLogin, action: authReducerType): any => {


    switch (action.type) {
        case "SET-USER-DATA":

            return {...state, ...action.payload};

        case "SET-ERROR":

            return {...state, error: action.error};


        case "TOOGLE-IS-FETCHING":

            return {...state, isFetching: action.isFetching};
        default:
            return state

    }
};

type authReducerType = setAuthUserDataType | setToogleIsFetchingACType | setErrorACType
export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type setToogleIsFetchingACType = ReturnType<typeof setToogleIsFetching>
export type setErrorACType = ReturnType<typeof setError>


// type setAuthUserType= {
//     id:number | null,email:string | null,login:string | null, isAuth:boolean
// }
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}

export const setError = (error: string) => {
    return {
        type: 'SET-ERROR',
        error
    } as const
}
export const setToogleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOOGLE-IS-FETCHING',
        isFetching: isFetching

    } as const
}


export const AuthorizationTC = () => async (dispatch: Dispatch) => {

    dispatch(setToogleIsFetching(true))

    const data = await loginAPI.me()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    } else {
        handleServerAppError(dispatch, data)
    }
    dispatch(setToogleIsFetching(false))

}


export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

    dispatch(setToogleIsFetching(true))

    const data = await loginAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(AuthorizationTC())
    } else {
        handleServerAppError(dispatch, data)
    }
    dispatch(setToogleIsFetching(false))
}

export const loginOut = () => async (dispatch: any) => {

    dispatch(setToogleIsFetching(true))

    const data = await loginAPI.loginOut()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    } else {
        handleServerAppError(dispatch, data)
    }
    dispatch(setToogleIsFetching(false))


}
