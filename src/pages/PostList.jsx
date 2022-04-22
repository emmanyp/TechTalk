import React, { useState, useEffect } from 'react'
import '../assets/css/postList.css'

// Services
import { getAllPosts, deletePost} from '../services/postService'
import PostCard from '../components/Post/PostCard'
import CreatePost from './CreatePost/CreatePost'

const PostList = (props) => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  
  const handleUpdatePost = async (updatedPost) => {
    const newPostsArray = posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    )
    setPosts(newPostsArray)
  }

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
      const newPostsArray = posts.filter(post => 
        post._id !== postId 
      )
      setPosts(newPostsArray)  
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) } 
  }, [])


  return (
    <div className="post-list">
        <CreatePost user={props.user} 
        posts={posts}
        setPosts={setPosts}
        />
      <div className="all-posts">
        {posts?.map((post) => (
          <div className="post-comment">
            <div className="post-card-and-button">
              <PostCard
                post={post}
                key={post._id}
                user={props.user}
                handleDeletePost={handleDeletePost}
                handleUpdatePost={handleUpdatePost}
                comments={comments}
                setComments={setComments}
              />
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList