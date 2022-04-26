import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {
  const navigate = useNavigate()
  const[isFriend, setIsFriend] = useState(props.myFriends.includes(props.profileId))
  
  const handleCheck=()=>{
    if(isFriend){
      props.handleUnaddFriend(props.profile)
      setIsFriend(false)
    }else{
      props.handleAddFriend(props.profile)
      setIsFriend(true)
    }
  }
  const handleClick = () => {
    if ( isFriend) {
      props.setProfileUser(props.profile);
      navigate("/profiles/:id")
    }
  }

const isMe = props.user.includes(props.profileId)

  return(
    <div className="card-container" >
      <div className="card">
        <img className="card-img" src={props.img} alt={props.name}  />
        <p className="card-title" onClick={() => handleClick()}>{props.name}</p>
        {isFriend ? 
          <button className='profile-button'><i class="far fa-check-square" onClick={()=> handleCheck()}></i></button> 
          : isMe ? 
            <button className='profile-button'></button> 
          :
        <ProfileAction onClick={()=> handleCheck()}/>  }
      </div>
    </div>
  )
}

export default ProfileCard