import h from "../Dialogs.module.css";
import React from "react";

type MessagesPropsType = {
    message: string
    key:number
}

export function Messages(props: MessagesPropsType) {

    // const text = React.createRef<HTMLTextAreaElement>()
    // const addMessage = () => {
    //         alert(text.current?.value)
    //     }


    return (
        <>
            <div className={h.message}>{props.message}</div>
            {/*<textarea >text</textarea>*/}
            {/*<button >ADD</button>*/}
        </>
    )
}