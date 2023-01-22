import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.scss"


const Header = () => {
  return (
    <div className='header'>
    {/* <img src={logo} className="header__logo" alt='logo'></img> */}
    <div>
      <Link to="/">
      <img
          className="header__logo"
          src="https://viniloslowcost.es/7460/vinilo-escudo-argentina-national-team-football.jpg"
          alt="First slide"
        />
      </Link>
    </div>
    
    <div className='header__menu'>
        <ul className='header__menu--list'>
            <li><Link to="/"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Home</span></button></Link></li>
            <li><Link to="/about"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Sobre nosotros</span></button></Link></li>
           
            <li><Link to="/contacto"><button className='bn3637 bn37'><span className='header__menu--list__titulo'>Contacto</span></button></Link></li>
        </ul>
    </div>

    </div>
  )
}

export default Header