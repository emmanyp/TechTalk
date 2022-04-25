import React, { useState } from "react"

const CreateTodo = (props) => {
  const [text, setText] = useState('')

  const formData = {
    todo_text: text,
    created_by: props.currentProfile.profile
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateTodo(formData)
    setText('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
    <input 
        required
        autoComplete='off'
        placeholder="todo"
        name="todo_text"
        value={text}
        onChange={(e) => setText(e.target.value)}
    />
    <button
    className="far fa-plus-square"
    type="submit"
    ></button>
  </form>
  )
}

export default CreateTodo