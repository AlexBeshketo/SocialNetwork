import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../state/redux-store";
import {Dispatch} from "redux";
import {addUsersAC, followAC, unfollowAC, usersType} from "../state/users-reducer";

export type mapStateToPropsType = {
    users: Array<usersType>
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}


function mapDispatchToProps(dispatch: Dispatch) {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUser: (users:Array<usersType>) => dispatch(addUsersAC(users))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);

