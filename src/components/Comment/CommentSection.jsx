import React from "react"


// Components
import CommentList from './CommentList'
import CreateComment from './CreateComment'

// Services
import * as postService from '../../services/postService'

const CommentSection = (props) => {
  const comments = props.post.comments
  const handleCreateComment = async (formData) => {
  try {
    const updatedPost = await postService.createComment(props.post._id, formData)
    props.handleUpdatePost(updatedPost)
  } catch (error) {
    throw error
  }
}

const handleDeleteComment = async (commentId) => {
  try {
    const updatedPost = await postService.deleteComment(props.post._id, commentId)
    props.handleUpdatePost(updatedPost)
  } catch (error) {
    throw error
  }
}
  return (
    <div className="comment-section">
      <div className="header">
        <div className="header-buttons"></div>
      </div>
      <CommentList comments={comments}
      handleDeleteComment={handleDeleteComment} />
      <CreateComment {...props}
      handleCreateComment={handleCreateComment}
      />
    </div>
  )
}

export default CommentSection