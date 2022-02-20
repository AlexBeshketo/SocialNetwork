import h from './Header.module.css'
import React from "react";


function Header  ()  {
    return (
    <header className={h.header}>
        <img alt={'ava'} src={'../../pictures/kolomoyskiy1.jpg'}/>
    </header>
    )
}

export  default Header