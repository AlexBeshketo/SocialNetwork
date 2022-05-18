import React, {JSXElementConstructor} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {ProfileType, setUserProfile} from "../../state/profile-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import { useLocation, useNavigate, useParams} from "react-router-dom"
import {compose} from "redux";





export type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToStateType
type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchToStateType = {
    setUserProfile: (profile: ProfileType) => void
}

// type ParamsUserIDType = {
//     userId: string,
// }

// type PropsWithParamsPropsType= RouteComponentProps<ParamsUserIDType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        debugger;
        //@ts-ignore

        let userId:string = this.props.router.params.userId;
              // let userId:string=this.props.match.params.userId

        //variant interneta
        // let userID:string = this.props.router.params.userId;

        // const params= useParams()

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

//variant interneta

 const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


//moe
export let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

//variant interneta
export default compose<React.ComponentType>(connect(mapStateToProps, {setUserProfile,
}),withRouter)(ProfileContainer)






// const WithUrlDataProfileContainer = withRouter(ProfileContainer)

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)