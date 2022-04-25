import React, { useState } from 'react'
import * as profileService from "../../services/profileService"



const ProfileInfoForm=(props) =>{
  const [formData, setFormData] = useState({
    bio: props.profile.bio,
    linkedin : props.profile.linkedin,
    github: props.profile.github,
  })
  
  const handleChange = evt =>{
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

const handleSubmit = async (e) =>{
  e.preventDefault()
  try {
    const editProfile = await profileService.updateProfile(props.profile._id,formData)
    props.setMyProfile(editProfile)
     setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  } catch (error) {
    throw error
  }
}
  return(
    
    <form className='create-form' onSubmit={handleSubmit}> 
        <input className='linkedin'
          type="text"
          name="github"
          autoComplete='off'
          placeholder='github'
          value={formData.github}
          onChange={handleChange}
        />
        <input className='linkedin'
          type="text"
          name="linkedin"
          autoComplete='off'
          placeholder='linkedin'
          value={formData.linkedin}
          onChange={handleChange}
        />
        <input className='bio-2'
          type="text"
          name="bio"
          autoComplete='off'
          placeholder='bio'
          value={formData.bio}
          onChange={handleChange}
        />
      
      <button className="learn-more" type="submit">Save Changes</button>
    </form>
  )
}


export default ProfileInfoForm