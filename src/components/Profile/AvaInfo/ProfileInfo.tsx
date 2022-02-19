import p from './ProfileInfo.module.css'
import React from "react";



const ProfileInfo = () => {

    return (
        < div>
            <div>
                <img alt={'aba'} className={p.img}
                     src='https://img3.goodfon.ru/original/1920x1080/4/51/peyzazh-priroda-plyazh-more-reka.jpg'/>
            </div>
            <div className={p.descriptionBlock}>
                Ava + info
            </div>


        </div>
    )
}
export default ProfileInfo
