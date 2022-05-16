

export type DialogsPageType = {
    users: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>,
    newMessagesBody: string
}
export type DialogsPropsType = {
    name: string,
    id: number
}
export type MessagesPropsType = {
    message: string,
    id: number,
}

export type usersType =  {name: string , id: number, uniqueUrlName: null | string,  photos: { small : null | string , large:null | string},  status: null | string, followed: boolean }

export type initialStateOfDialogsPageType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount : number,
    currentPage: number,
    isFetching: boolean



}

// users: [
//     {
//         id: 1, followed: false,
//         name: 'Aleksandr',
//         photoURL: 'https://glavcom.ua/img/article/6664/16_main.jpg',
//         status: 'А я вам сейчас покажу, откуда на Беларусть готовилось нападение. И если бы..',
//         location: {country: 'Belarus', city: 'Minsk'}
//     },
//
//     {
//         id: 1,
//         followed: false,
//         name: 'Elon',
//         photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPTZvHXqUKrFwXtWTABC_5Lt6DC1u4x2vag&usqp=CAU',
//         status: 'Next I\'m buying Coca-Cola to put the cocaine back in. ',
//         location: {country: 'USA', city: 'Vashington'}
//     },
//     {
//         id: 1,
//         followed: false,
//         name: 'Volodymyr',
//         photoURL: 'https://cdnuploads.aa.com.tr/uploads/Contents/2022/01/27/thumbs_b_c_91bcd25b82c48f5ad9f6eb7e984c59d6.jpg?v=171350',
//         status: 'Hi, how are you?', location: {country: 'Ukraine', city: 'Kyiv'}
//     },
//     {
//         id: 1,
//         followed: false,
//         name: 'Volodymyr',
//         photoURL: 'https://eimg.pravda.com/images/doc/3/a/3ab75a7-povorozniuk-fb.jpg',
//         status: 'Vova, fuck them', location: {country: 'Ukraine', city: 'Cherkasy'}
//     }
// ]

let initialStateOfUsersPage: initialStateOfDialogsPageType = {
    users: [],
    pageSize: 15,
    totalUsersCount : 0,
    currentPage: 2,
    isFetching: true
}


export const usersReducer = (state = initialStateOfUsersPage, action: UsersACTypes): initialStateOfDialogsPageType => {
    switch (action.type) {
        case  "FOLLOW" : {
            return {...state, users: [...state.users.map(k => k.id === action.id ? {...k, followed: true} : k)]}
        }
        case  "UNFOLLOW" : {
            return {...state, users: [...state.users.map(k => k.id === action.id ? {...k, followed: false} : k)]}
        }
        case "SET-USER" : {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE" : {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT" : {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case "TOOGLE-IS-FETCHING" : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}

export type UsersACTypes = followACType | unfollowACType | addUsersACACType | setCurrentPageACType | setTotalUsersCountACType | ToogleIsFetchingACType
type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type addUsersACACType = ReturnType<typeof setUser>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountACType  = ReturnType<typeof setTotalUsersCount >
type ToogleIsFetchingACType  = ReturnType<typeof setToogleIsFetching >

export const follow = (id: number) => {
    return {
        type: 'FOLLOW',
        id: id
    } as const
}

export const unfollow = (id: number) => {
    return {
        type: 'UNFOLLOW',
        id: id
    } as const
}

export const setUser = (users: Array<usersType>) => {
    return {
        type: 'SET-USER',
        users: users

    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage

    } as const
}
export const  setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount: totalUsersCount

    } as const
}
export const setToogleIsFetching= (isFetching:boolean) => {
    return {
        type: 'TOOGLE-IS-FETCHING',
        isFetching: isFetching

    } as const
}