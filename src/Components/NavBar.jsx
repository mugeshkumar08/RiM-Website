import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../Components/NavBar.css'
import  logo from '../Assets/RiM-Logo.png'
import userLogo from '../Assets/user-logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav>
           <div className='nav-1'>
              <p className='nav-para'> <i class="bi bi-geo-alt-fill" style={{color: 'red'}}></i> Location</p>
              <img className='logo' src={logo} alt="" />
              <img className='userLogo' src={userLogo} alt="" />
           </div>
           <div className='navigate'>
             <ul>
                <Link to="/">MainPage</Link>
                <Link to="/store-details">StoreDetails</Link>
                <Link to="/Feed-views">FeedView</Link>
                <Link to="/Login-Page">Login</Link>
                <Link to="/Profile-info">Profile Info</Link>
             </ul>
           </div>
          
        </nav>
    </>
  )
}

export default NavBar