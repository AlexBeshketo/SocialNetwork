import p from './ProfileInfo.module.css'
import React from "react";
import {ProfileType} from "../../../state/profile-reducer";



const ProfileInfo = (props: ProfileType) => {

    const {photos, userId, contacts, fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = props;

    return (
        < div>
            <div className={p.photo_default}>
                <img alt={'aba'}
                     src='https://img3.goodfon.ru/original/1920x1080/4/51/peyzazh-priroda-plyazh-more-reka.jpg'/>
            </div>
            <div className={p.descriptionBlock}>


                    <div className={p.container_left}>
                        <div>
                            <img style={{minWidth:'100px', minHeight:'100px'}}
                                src={photos.large != null ? photos.large : 'https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg'}
                                alt=""/>
                        </div>
                        <div>
                            <div>Full Name: {fullName}</div>
                            <div>Id: {userId}</div>
                            <div>About Me: {aboutMe}</div>

                        </div>
                    </div>
                    <div className={p.container_right}>
                        <div className={p.logo}>Looking for a job &nbsp;
                            <img style={{width:'25px', height:'25px' }} src={ lookingForAJob? 'https://cdn-icons-png.flaticon.com/512/6276/6276686.png' : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'}  alt=""/>
                        </div>
                        <div className={p.logo} >Looking for a job description  &nbsp;
                            <img src={ lookingForAJobDescription? 'https://cdn-icons-png.flaticon.com/512/6276/6276686.png' : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'} alt={'yea'}/>
                        </div>
                        <div>Website : {contacts.website}</div>
                        <div>Instagram : {contacts.instagram}</div>
                        <div>Facebook : {contacts.github}</div>
                        <div>Linkedin : {contacts.mainLink}</div>
                        <div>Linkedin : {contacts.vk}</div>
                        <div>Linkedin : {contacts.linkedin}</div>
                    </div>
                </div>




        </div>
    )
}
export default ProfileInfo
