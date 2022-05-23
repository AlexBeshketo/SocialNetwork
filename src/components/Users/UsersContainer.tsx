import React from "react";
import {
    follow,
    setCurrentPage,
    setToogleIsFetching,
    setTotalUsersCount,
    setUser,
    unfollow,
    usersType
} from "../../state/users-reducer";
import {AppStateType} from "../../state/redux-store";

import {connect} from "react-redux";
import {Users} from "./Users";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import {usersAPI} from "../../api/api";


export type ResponseUsersType = {
    error: string | null,
    items: usersType[]
    totalCount: number
}

type mapStateToPropsType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToogleIsFetching: (isFetching: boolean) => void

}

export type UsersAPIContainerType = mapStateToPropsType & mapDispatchToPropsType

class UsersAPIContainer extends React.Component<UsersAPIContainerType> {

    componentDidMount() {
        this.props.setToogleIsFetching(true)


        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToogleIsFetching(false)
            this.props.setUser(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setToogleIsFetching(true)

        usersAPI.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToogleIsFetching(false)
                this.props.setUser(data.items)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <WaitingLogo/> : null}
                <Users users={this.props.users}
                       setUser={this.props.setUser}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}
                       currentPage={this.props.currentPage}
                       setCurrentPage={this.props.setCurrentPage}
                       setTotalUsersCount={this.props.setTotalUsersCount}
                />
                {/*<WaitingLogo/>*/}
            </>
        )
    }
}


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

// function mapDispatchToProps(dispatch: Dispatch): mapDispatchToPropsType {
//     return {
//         follow: (userId) => dispatch(follow(userId)),
//         unfollow: (userId) => dispatch(unfollow(userId)),
//         setUser: (users) => dispatch(setUser(users)),
//         setCurrentPage: (CurrentPage) => dispatch(setCurrentPage(CurrentPage)),
//         setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCount(totalUsersCount)),
//         setToogleIsFetching: (isFetching) => dispatch(setToogleIsFetching(isFetching))
//
//     }
// }


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount,
    setToogleIsFetching
})(UsersAPIContainer);



