import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {ProfileType, setUserProfile} from "../../state/profile-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import {profileAPI} from "../../api/api";


export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToStateType
type OwnProps = {
    profile: ProfileType
    match?: any
    setUserProfile: (profile: ProfileType) => void

}

type mapStateToPropsType = {
    profile: ProfileType
    match: any
}
type mapDispatchToStateType = {
    setUserProfile: (profile: ProfileType) => void
}


class ProfileContainer extends React.Component<OwnProps> {

    componentDidMount() {

        //@ts-ignore
        let userId = this.props.match && Number(this.props.match?.userId)
        //let userId:string = this.props.router.params.userId;
        if (!userId) {
            userId = 23828
        }

        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.profile ?
                    <Profile profile={this.props.profile}/>
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
    }
}


export default connect<mapStateToPropsType, mapDispatchToStateType, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
})(ProfileContainer)


// const WithUrlDataProfileContainer = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)