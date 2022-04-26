import React, { useState } from 'react'


// Components

//Services
import { updatePost } from '../../services/postService'

const EditPost = (props) => {
  const [text, setText] = useState({
    text:props.post.text
  })
  const handleChange=e =>{
    setText({...text, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const editPost = await updatePost(props.post._id, text)
      setText({
        text:''
      })
      props.setBoolean(false)
      props.handleUpdatePost(editPost)
    } catch (error) {
      throw error
    }
  }
  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <textarea
        className='input-bar'
        type="text"
        name="text"
        autoComplete='off'
        placeholder='text'
        value={text.text}
        onChange={handleChange}
      />
      <button className='submit-btn' type="submit">Save</button>
    </form>

  )
}

export default EditPost