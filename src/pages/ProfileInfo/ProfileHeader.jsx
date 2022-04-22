import React from 'react'


const ProfileHeader=(props) =>{
  return(
  <>
  <div className='body'>
  <section className="bio">
  <div className="bio__container">
    <div className="bio__flex">
      <div className="flex__item">
        <div className="bio__info">
          <div className="bio__info-flex">
            <div className="avatar__block">
              <div className="avatar__container">
                <img src={props.profile.avatar} alt={props.profile.name} />
            </div>
              <span className="name">{props.profile.name}</span>
              </div>
                <div className="text__block">
                <ul>
                  <li className="url">Github: <span> 

                    <a href={props.profile.github}> {props.profile.github} </a> </span>
                    </li>
                  <li className="url">LinkedIn: <span> <a href={props.profile.linkedin} > {props.profile.linkedin}</a> </span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex__item">
          <div className="bio__content">
            <h5>Bio:</h5>
            <p className='people'>{props.profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  </>
  
  )
}


export default ProfileHeader