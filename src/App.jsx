import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import PostList from './pages/PostList'
import * as authService from './services/authService'
import Findjobs from './pages/Jobs/Findjobs'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles user={user}/> : <Navigate to="/login" />}
        />
        <Route
          path="/posts"
          element={user ? <PostList user={user}/> : <Navigate to="/login" />}
        />
        <Route
          path="/jobs"
          element={user ? <Findjobs user={user}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
