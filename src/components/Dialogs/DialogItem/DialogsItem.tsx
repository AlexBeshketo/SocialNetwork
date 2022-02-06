import h from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemType = {
    name: string,
    id: number
}




export function DialogsItem  (props:DialogsItemType)  {
    return (
        <div className={h.user}>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    )
}


