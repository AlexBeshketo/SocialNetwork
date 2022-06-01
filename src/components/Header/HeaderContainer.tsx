import React from "react";
import Header from "./Header";
import {AppStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {dataStateofLoginType, loginThunkCreator, setToogleIsFetching, setUserData} from "../../state/auth-reducer";
import WaitingLogo from "../WaitingLogo/WaitingLogo";
import {loginAPI} from "../../api/api";

type mapStateToPropsType = {
    data: dataStateofLoginType
    isFetching: boolean
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUserData: (data: dataStateofLoginType) => void,
    setToogleIsFetching: (isFetching: boolean) => void,
    loginThunkCreator: ()=> void
}

export type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType  //типизация классовой компоненты//

export type AxiosType<T> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
      this.props.loginThunkCreator() //thunk get zapros avtorizaciji
    }


    render() {
        return (
            this.props.data ?
                <Header data={this.props.data} isAuth={this.props.isAuth}/>
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
    setUserData, setToogleIsFetching, loginThunkCreator
})(HeaderContainer)
