import n from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

import {SideBarPageType} from "../../state/state";
import React from "react";



function Navbar(props:SideBarPageType ) {

    const checkActive = (isTrue?:boolean) =>  (!isTrue ? '' : n.active)


    const friends = props.names.map((post) => <div className={n.dot}>{post.name}</div>)


    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink className={checkActive()}  to='./profile'>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={checkActive()}  to='/dialogs'>Messages </NavLink>
            </div>

            <div className={n.item}>
                <NavLink className={checkActive()}  to='/news'>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={checkActive()}  to='/music'>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={checkActive()}  to='/settings'>Settings</NavLink>
            </div>
            <div className={n.friends}> Friends</div>
            <div>{friends}</div>

        </nav>
    )
}

export default Navbar