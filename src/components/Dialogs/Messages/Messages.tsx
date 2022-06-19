import h from "../Dialogs.module.css";
import React from "react";


type MessagesPropsType = {
    message: string
    key:string
}



export function Messages(props: MessagesPropsType) {




    return (
        <>
            <div className={h.message}>{props.message}</div>

        </>
    )
}