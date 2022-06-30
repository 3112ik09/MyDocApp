import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div  className='header'>
      <img className='header__logo' src="/images/logo1.png"></img>
      
      <div className='header__option'>
        <Link to='/'>
        <a className="header__link">
          <img src='/images/home-icon.svg' alt=''/>
          <span>HOME</span>
        </a>
        </Link>
        <a className="header__link">
          <img src='/images/search-icon.svg' alt=''/>
          <span>SEARCH</span>
        </a>

        <Link to='/Doc'>
          <a className="header__link">
            <img src='/images/watchlist-icon.svg' alt=''/>
            <span>DOCTORS</span>
          </a>
        </Link>
        <Link to="/R">
          <a className="header__link">
            <img src='/images/original-icon.svg' alt=''/>
            <span>AI RECOMENDATION</span>
          </a>
        </Link>

        


      </div>


      <img className='header__profile' src='https://www.pinkvilla.com/imageresize/red_velvet_irene_style.jpg?width=752&format=webp&t=pvorg' alt=''>

      </img>

    </div>
  )
}

export default Header
