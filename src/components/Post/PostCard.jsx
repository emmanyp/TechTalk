import React from 'react'

const PostCard = (props) => {
  return (
    <div className="post-card">

      <div className="card-header"></div>

      <div className="text">
        <p>{props.post.text}</p>
      </div>
      <div className="comment-dropdown"></div>
    </div>
  )
}

export default PostCard