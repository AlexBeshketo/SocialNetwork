import h from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemType = {
    name: string,
    id: string
}




export function DialogsUsers  (props:DialogsItemType)  {
    return (
        <div className={h.user}>

            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}


