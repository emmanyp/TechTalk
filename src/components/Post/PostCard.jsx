import React from 'react'

const PostCard = (props) => {
  console.log(props);
  return (
    <div className="post-card">

      <div className="card-header"></div>

      <div className="text">
        <p>{props.post.text}</p>
        <h1>{props.user.name}</h1>
      </div>
      <div className="comment-dropdown"></div>
    </div>
  )
}

export default PostCard