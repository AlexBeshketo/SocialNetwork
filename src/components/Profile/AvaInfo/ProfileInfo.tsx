import p from './ProfileInfo.module.css'
import React from "react";
import {ProfileType} from "../../../state/profile-reducer";

import WebIcon from '@mui/icons-material/Web';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Avatar} from "@mui/material";
import ProfileInfoSceleton from "./ProfileInfoSceleton";

type ProfileInfoType = {
    profile: ProfileType
    isFetching: boolean
}

const ProfileInfo = ({profile, isFetching}: ProfileInfoType) => {

    debugger;


    const {photos, userId, contacts, fullName, aboutMe, lookingForAJob, lookingForAJobDescription} = profile;


    return (
        <div className={p.main}>
            <div className={p.photo_default}>
                <img alt={'aba'}
                     src='https://img.freepik.com/free-photo/social-media-heart-like-icons-production-line-conyeror-belt-3d-render_601748-35543.jpg?w=1380'/>
            </div>

            {/*//block */}

            {isFetching

                ? <ProfileInfoSceleton/>
                    : <div className={p.descriptionBlock}>
                    <div className={p.container_left}>
                        <div>
                            <Avatar
                                src={photos.large != null ? photos.large : 'https://icon-library.com/images/users-icon-png/users-icon-png-15.jpg'}
                                alt=""
                                sx={{width: '200px', height: '200px', padding: 'initial'}}/>
                        </div>


                    </div>
                    <div className={p.container_right}>
                        <div>
                            <h4>{fullName}</h4>
                            {/*<div>Id: {userId}</div>*/}
                            <h5>About Me: {aboutMe}</h5>

                        </div>
                        <div className={p.looking_job_container}>
                            <div>
                    <span className={p.logo}>Looking for a job &nbsp;
                        <img style={{width: '25px', height: '25px'}}
                             src={lookingForAJob ? 'https://cdn-icons-png.flaticon.com/512/6276/6276686.png' : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'}
                             alt=""/>

                    </span>
                            </div>
                            <div>
                    <span className={p.logo}>Looking for a job description  &nbsp;
                        <img
                            src={lookingForAJobDescription ? 'https://cdn-icons-png.flaticon.com/512/6276/6276686.png' : 'https://cdn-icons-png.flaticon.com/512/753/753345.png'}
                            alt={'yea'}/>
                    </span>
                            </div>
                        </div>
                        <div className={p.logo_contacts}>
                       <span className={p.logo_span}>
                       <WebIcon color={contacts.website === null ? 'disabled' : 'primary'}
                                fontSize='large'/>
                       </span>
                            <span className={p.logo_span}><InstagramIcon fontSize='large'
                                                                         color={contacts.instagram === null ? 'disabled' : 'primary'}/>
                        </span>
                            <span className={p.logo_span}><GitHubIcon fontSize='large'
                                                                      color={contacts.github === null ? 'disabled' : 'primary'}/>  </span>
                            <span className={p.logo_span}><LinkedInIcon fontSize='large'
                                                                        color={contacts.linkedin === null ? 'disabled' : 'primary'}/></span>
                            <span className={p.logo_span}><FacebookIcon fontSize='large'
                                                                        color={contacts.facebook === null ? 'disabled' : 'primary'}/></span>
                        </div>
                    </div>
                </div>
                    }


                </div>
                )
            }
            export default ProfileInfo
