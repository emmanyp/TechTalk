import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../Profiles/ProfileCard'
import '../../assets/css/profiles.css'
import '../../assets/css/profileInfo.css'
const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])
  const myProfile = profiles.find((profile)=> profile._id === props.user.profile)
  const handleAddFriend= async(ele)=>{
      await profileService.addFriend(ele._id)
  }
  const handleUnaddFriend= async(ele)=>{
    await profileService.UnaddFriend(ele._id)
}

  useEffect(()=>{
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  },[])

  const profileList = profiles.map((ele, idx)=> {
    return (
      <>
      <ProfileCard
        user={props.user.profile}
        profileId={ele._id}
        img={ele.avatar}
        name={ele.name}
        key={idx}
        setProfiles={setProfiles}
        myFriends={myProfile.friends}
        handleAddFriend={handleAddFriend}
        handleUnaddFriend={handleUnaddFriend}
        setProfileUser={props.setProfileUser}
        profile={ele}
      />
        </>
    )
  })
  return (
    <div className="profile-card">
    
    {profileList}
    </div>
  )
}
export default Profiles