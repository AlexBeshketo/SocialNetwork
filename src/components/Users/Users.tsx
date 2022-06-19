import React, {useEffect} from 'react';

import styles from "./users.module.css"
import {usersType} from "../../state/users-reducer";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";



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
            if (i<45) {
                pages.push(i);
            }
        }


        return (

            <div>

                <div className={styles.wrapper}>
                    <div>
                        {/*<TablePaginationDemo currentPage={props.currentPage} pagesCount={pagesCount} onPageChanged={props.onPageChanged} />*/}
                        {pages.map((p, index) => <span key={index} onClick={(e) => {
                          props.onPageChanged(p)
                        }} className={props.currentPage === p ? styles.currentPage : styles.easyPage}>{p}</span>)}

                    </div>

                    {
                        props.users.map(k => <div className={styles.inlinecontainer_border} key={k.id}>
                            <div className={styles.inlinecontainer}>
                                <div className={styles.inlinecontainer_img}>
                                    <NavLink to={'/profile/' + k.id}>
                                        <img className={styles.avatar}
                                             src={k.photos.small != null ? k.photos.small : 'https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg'}
                                             alt="photo"/>
                                    </NavLink>
                                </div>
                                <div className={styles.container_buttons}>

                                    {k.followed
                                        ? <Button style={{padding: '6px',
                                            color:'black' }} className={styles.button}
                                                  disabled={props.followingInProgress.some(id => id === k.id)}
                                                  onClick={() => {
                                                      props.unfollow(k.id)
                                                  }}>Unfollow</Button>

                                        : <Button style={{padding: '6px',
                                            color:'black' }} className={styles.button}
                                                  disabled={props.followingInProgress.some(id => id === k.id)}
                                                  onClick={() => {
                                                      props.follow(k.id)
                                                  }}>Follow</Button>}

                                </div>
                            </div>

                            <div className={styles.inlinecontainer + ' ' + styles.inlinecontainer_nameStatus}>
                                <NavLink to={'/profile/' + k.id}>
                                    <div className={styles.name}>{k.name}</div>
                                </NavLink>
                                <div className={styles.status}>{k.status}</div>
                            </div>
                            <div className={styles.inlinecontainer + ' ' + styles.inlinecontainer_country}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }
;

