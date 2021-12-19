import React, { useState, useEffect } from 'react'

// Services
import { getAllPosts } from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from './CreatePost/CreatePost'
const PostList = (props) => {
  console.log('123', props);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) } 
  }, [])

  return (
    <div>
      <h1>Posts!</h1>
      <CreatePost user={props.user}/>
      {posts?.map((post) => (
        <PostCard
          post={post}
          key={post._id}
        />
      ))}
    </div>
  )
}

export default PostList