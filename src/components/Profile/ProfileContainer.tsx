import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {getUserProfileThunkCreator, ProfileType, setUserProfile} from "../../state/profile-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import {profileAPI} from "../../api/api";


export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToStateType
type OwnProps = {
    profile: ProfileType
    match?: any

    getUserProfileThunkCreator:(userId:number) => void
    isFetching:boolean

}

type mapStateToPropsType = {
    profile: ProfileType
    match: any
    isFetching:boolean
}
type mapDispatchToStateType = {

    getUserProfileThunkCreator:(userId:number) => void
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
    }


    render() {
        return (
            <div>
                {
                    this.props.profile ?
                    <Profile profile={this.props.profile} isFetching={this.props.isFetching}/>
                    :
                    <WaitingLogo/>
                }
            </div>
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
        isFetching: state.profilePage.isFetching
    }
}


export default connect<mapStateToPropsType, mapDispatchToStateType, {}, AppStateType>(mapStateToProps, {
    getUserProfileThunkCreator
})(ProfileContainer)


// const WithUrlDataProfileContainer = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)