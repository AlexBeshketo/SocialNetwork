import React from 'react';

import styles from "../users.module.css"
import {usersType} from "../../../state/users-reducer";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";
import {WaitingLogo} from "../../WaitingLogo/WaitingLogo";


type UsersType = {

    pageSize: number,
    totalUsersCount: number,
    currentPage: number

    onPageChanged: (currentPage: number) => void

}
export type PostDeleteAxiosType = {
    resultCode: number
    messages: string[]
    data: {}

}


export const UsersPagination = ({totalUsersCount, pageSize, onPageChanged, currentPage}: UsersType) => {

    let pagesCount = Math.ceil(totalUsersCount /pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i < 45) {
            pages.push(i);
        }
    }


    return (

                <div>
                    {/*<TablePaginationDemo currentPage={props.currentPage} pagesCount={pagesCount} onPageChanged={props.onPageChanged} />*/}
                    {pages.map((p, index) => <span key={index} onClick={(e) => {
                       onPageChanged(p)
                    }} className={currentPage === p ? styles.currentPage : styles.easyPage}>{p}</span>)}

                </div>

    )
};

// [...(new Array(6))].map((_, index) => <PizzaSkeleton key={index}

