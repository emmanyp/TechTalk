import React from 'react'

const PostForm = (props) => {

  
  return (
    <form className="create-form" onSubmit={props.handleCreatePost}>
      <div className="question-prompt">
        <label>Make A Post</label>
      </div>
      <textarea
        required
        name="text"
        autoComplete='off'
        placeholder="Make a Post"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />

      <div className="border"></div>

      <div className="border"></div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm