import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {ProfileType, setUserProfile} from "../../state/profile-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import  RouteComponentProps from "react-router";
import withRouter from "react-router-dom";


export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToStateType
type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToStateType = {
    setUserProfile: (profile: ProfileType) => void
}

type ParamsUserIDType = {
    userId: string,
}

type PropsWithParamsPropsType= RouteComponentProps<ParamsUserIDType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsWithParamsPropsType> {

    componentDidMount() {
        let userId=this.props.match.params.userId
        axios.get<ProfileType>('https://social-network.samuraijs.com/api/1.0/profile/2' + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
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


export let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)