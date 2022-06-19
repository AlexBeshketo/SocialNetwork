import React from "react";
import Header from "./Header";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {
    dataStateofLoginType,
    AuthorizationTC,
    setToogleIsFetching,
    setAuthUserData,
    loginOut
} from "../../state/auth-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import {loginAPI} from "../../api/api";

type mapStateToPropsType = {
    data: dataStateofLoginType
    isFetching: boolean
    isAuth: boolean
}
type mapDispatchToPropsType = {
    // setAuthUserData: (data: dataStateofLoginType) => void,
    // setToogleIsFetching: (isFetching: boolean) => void,
    authorizationTC: ()=> void
    loginOut: ()=> void
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType  //типизация классовой компоненты//




class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
      this.props.authorizationTC() //thunk get zapros avtorizaciji
    }


    render() {
        return (
            this.props.data ?
                <Header loginOut={this.props.loginOut}  data={this.props.data} isAuth={this.props.isAuth}/>
                : <WaitingLogo/>
        )
    }
}


export let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        data: state.auth.data,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    authorizationTC: AuthorizationTC, loginOut: loginOut
})(HeaderContainer)
