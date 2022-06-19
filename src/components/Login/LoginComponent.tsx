import React from 'react';
import LoginForm from "./LoginForm";
import { loginTC} from "../../state/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";


type MapDispatchToPropsType= {
    loginTC: (email:string, password:string, rememberMe:boolean)=> void
}

type mapStateToPropsType = {
    isAuth: boolean
    errorLoginServer: string
}

export type LoginComponentType= MapDispatchToPropsType & mapStateToPropsType

const LoginComponent = ({loginTC,isAuth,errorLoginServer }:LoginComponentType) => {
    return (
        <div>
         <h1>Form name</h1>
            <LoginForm isAuth={isAuth} loginTC={loginTC} errorLoginServer={errorLoginServer} />
        </div>
    );
};

const mapStateToProps =(state:AppStateType):mapStateToPropsType=> ({
    isAuth: state.auth.isAuth,
    errorLoginServer:state.auth.error
})

export default connect (mapStateToProps, {loginTC})(LoginComponent);