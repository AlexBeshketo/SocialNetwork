import h from './Header.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import {dataStateofLoginType} from "../../state/auth-reducer";


type HeaderPagePropsType = {
    data: dataStateofLoginType
    isAuth:boolean
}

function Header({data, isAuth}: HeaderPagePropsType) {

    const {id,email,login}= data;

    return (
        <header className={h.header}>
        <span>
        <img alt={'ava'}
             src={'https://forbes.ua/static/storage/thumbs/1200x630/e/21/e1a4730a-804e15fc5c92a055e2ab8e71133a921e.png?v=4645_1'}/>
        </span>
            <span style={{float: "right",}}>
                {isAuth? login
            : <NavLink to={"/login"}>Login</NavLink>
                }
        </span>
        </header>
    )
}

export default Header