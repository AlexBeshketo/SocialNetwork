import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import React from "react";

export  const ProfileWithParam = () => {
    const match = useParams<string>()

    return <ProfileContainer match={match}/>
}