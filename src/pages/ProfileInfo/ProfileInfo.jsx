import React from 'react'
import * as profileService from '../../services/profileService'
import {useState, useEffect} from  "react"
import ToDoSection from "../../components/ToDo/ToDoSection"

import ProfileHeader from './ProfileHeader'
import ProfileInfoForm from "./ProfileInfoForm"


const ProfileInfo = (props) => {
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(()=>{
    const getProfile = async()=>{

      const profile = await profileService.profileInfo(props.currentProfile.profile ? props.currentProfile.profile : props.currentProfile._id )
      setCurrentProfile(profile) 
    }
    getProfile()
  },[props.currentProfile])

  
  return(
      <>
        <ProfileHeader                      
        profile = {currentProfile}
        />
        { props.user.profile === currentProfile?._id ? 
          <>
            <ProfileInfoForm 
              profile={currentProfile} 
              setMyProfile= {setCurrentProfile} 
            />
            <ToDoSection 
              currentProfile={props.currentProfile}
              profile={currentProfile}
            />
          </>
          : 
          ""
        } 
      </>
      
  )
}

export default ProfileInfo