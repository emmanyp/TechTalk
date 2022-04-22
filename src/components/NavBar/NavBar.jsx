import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/conversation.png'

const NavBar = ({ user, handleLogout, setProfileUser}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setProfileUser(user);
    navigate("/profiles/:id")
  }


  return (
    <>
    <header id="page-header">
      <nav className="navbar">
        <div class="logo">
        <Link to ="/">
            TechTalk<img 
              src={logo} 
              alt="TechTalk Logo"
              id="logo-img"
              /> 
          </Link>

        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          
          <div class="menu">
            {user ?
            <>
              <li><Link to="/profiles"><i class="fas fa-user-plus"></i> Add Friends</Link></li>
              <li><Link to="/posts"><i class="fas fa-users"></i> My Feed</Link></li>
              <li><Link to="/jobs"><i class="fas fa-info-circle"></i> Jobs</Link></li>
              <li onClick={() => handleClick()}><i class="fas fa-user"></i> My Profile</li>
              <li><Link to="" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i> Logout</Link></li>
            </>
              :
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
            }
          </div>      
        </ul>
      </nav>
      </header>
    </>
  )
}
export default NavBar
