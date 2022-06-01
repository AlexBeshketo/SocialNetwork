import React from 'react';
import axios from "axios";
import {ResponseUsersType} from "../components/Users/UsersContainer";
import {PostDeleteAxiosType} from "../components/Users/Users";
import {ProfileType} from "../state/profile-reducer";
import {dataStateofLoginType} from "../state/auth-reducer";
import {AxiosType} from "../components/Header/HeaderContainer";


type GetUsersType = {
    currentPage: number
    pageSize: number
}

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "b1112245-dcb7-4d31-90a6-806e9b08e47a"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`,
                {withCredentials: true})
                .then(response => {
                    return response.data
                }));
    }
}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return (
//         instance.get<ResponseUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//             {withCredentials: true})
//             .then(response => {
//                 return response.data
//             }));
// };


export const folowwed_unfollowedAPI = {

    unfollowUsers(id: number) {
        return (
            instance.delete<PostDeleteAxiosType>(`follow/${id}`)
                .then(response => {
                    return response.data
                }))
    },

    followUsers(id: number) {
        return (
            instance.post<PostDeleteAxiosType>(`follow/${id}`
                , {},)
                .then(response => {
                    return response.data
                }))
    }
}

export const profileAPI = {

    getUserProfile(userId:number ) {
        return instance.get<ProfileType>('profile/' + userId)
            .then(response => {
                return response.data
            })
    },

}

export const loginAPI = {

    getLogin() {
        return (
            instance.get<AxiosType<dataStateofLoginType>>('auth/me')
                .then(response => {
                    return response.data
                })
        )
    }
}



