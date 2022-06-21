import React from 'react';

import styles from "../users.module.css"
import {usersType} from "../../../state/users-reducer";
import {WaitingLogo} from "../../WaitingLogo/WaitingLogo";
import {UsersPagination} from "../UsersPaginator/UsersPaginator";
import {User} from "../User/User";


type UsersType = {
    /*1.obj*/
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    /*2.func*/
    follow: (userId: number) => void
    unfollow: (userId: number) => void

    onPageChanged: (currentPage: number) => void
    followingInProgress: []
    isFetching: boolean
}
export type PostDeleteAxiosType = {
    resultCode: number
    messages: string[]
    data: {}

}


export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i < 45) {
            pages.push(i);
        }
    }


    return (

        <div>

            <div className={styles.wrapper}>
                <UsersPagination currentPage={props.currentPage}
                                 onPageChanged={props.onPageChanged} pageSize={props.pageSize}
                                 totalUsersCount={props.totalUsersCount}/>

                <div className={styles.inlinecontainer_border}>

                    {
                        !props.isFetching
                            ? props.users.map(user => <User user={user}
                                                            followingInProgress={props.followingInProgress}
                                                            follow={props.follow} unfollow={props.unfollow}/>)
                            : [...(new Array(15))].map((_, index) => <WaitingLogo key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
};



