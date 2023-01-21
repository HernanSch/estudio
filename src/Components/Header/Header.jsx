import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.scss"


const Header = () => {
  return (
    <div className='header'>
    {/* <img src={logo} className="header__logo" alt='logo'></img> */}
    <h2>LOGO</h2>
    <div className='header__menu'>
        <ul className='header__menu--list'>
            <li><Link to="/"><button className='bn3637 bn37'><span>Home</span></button></Link></li>
            <li><Link to="/about"><button className='bn3637 bn37'><span>Acerca de nosotros</span></button></Link></li>
           
            <li><Link to="/contacto"><button className='bn3637 bn37'><span>Contacto</span></button></Link></li>
        </ul>
    </div>

    </div>
  )
}

export default Header