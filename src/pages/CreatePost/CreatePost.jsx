import React, { useState } from 'react'
import { useNavigate } from 'react-router'

// Components
import PostForm from './PostForm'

//Services
import { createPost } from '../../services/postService'

  const CreatePost = (props) => {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const formData = {
    text: text, 
    added_by: props.user.profile, 
  }
  const handleCreatePost = async (e) => {
    try {
      const newPost = await createPost(formData)
      console.log(newPost) 
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <PostForm 
        text={text}
        setText={setText}
        handleCreatePost={handleCreatePost}
      />

    </div>
  )
}

export default CreatePost