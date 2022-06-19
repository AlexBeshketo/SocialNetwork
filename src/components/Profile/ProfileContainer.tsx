import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../state/profile-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import p from './Profile.module.css'


export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToStateType
type OwnProps = {
    profile: ProfileType
    match?: any
    status: string
    getUserProfileThunkCreator: (userId: number) => void
    getStatusThunkCreator: (userId: number) => void
    updateStatusThunkCreator: (status: string) => void
    isFetching: boolean

}

type mapStateToPropsType = {
    profile: ProfileType
    match: any
    isFetching: boolean
    status: string

}
type mapDispatchToStateType = {

    getUserProfileThunkCreator: (userId: number) => void
    getStatusThunkCreator: (userId: number) => void
    updateStatusThunkCreator: (status: string) => void
}


class ProfileContainer extends React.Component<OwnProps> {


    componentDidMount() {


        let userId = this.props.match && Number(this.props.match?.userId)
        console.log(userId)
        console.log(this.props)
        //let userId:string = this.props.router.params.userId;
        if (!userId) {
            userId = 23828
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }


    render() {
        return (
            <>
                {
                    this.props.profile ?
                        <Profile profile={this.props.profile} isFetching={this.props.isFetching}
                                 status={this.props.status} updateStatus={this.props.updateStatusThunkCreator}/>
                        :
                        <WaitingLogo/>
                }
            </>
        );
    }
}

type ToOwnType = {
    match?: any
}

export let mapStateToProps = (state: AppStateType, ownProps: ToOwnType) => {
    return {
        profile: state.profilePage.profile,
        match: ownProps.match,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator
    }),
    WithAuthRedirect)(ProfileContainer)


// const WithUrlDataProfileContainer = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)