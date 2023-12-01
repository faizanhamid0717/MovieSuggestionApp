import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navber = () => {
  return (
    <div className="main-container"> 
      <div className="background-image">
        
          <div className="top-row">
             <div className="logo">FilmFiesta</div>
             <div className='link'>
             <Link to='/signin'><div className="login-button">SignIn</div></Link>
             <Link to='/favourite'><div className="fav-button">Favourites</div></Link>
             </div>
             
          </div>

        
          <div className="center-content1">
            <p>Unlimited movies, TV shows and more...</p>
            <Link to={`/signin`}><button>Get Started </button></Link>
          </div>

      </div>
    </div>
  )
}

export default Navber


