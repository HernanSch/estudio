import React from 'react'
import { Link } from 'react-router-dom'

import './Mision.scss'

const Somos = () => {
  return (
    <div className='bloque_texto'>
      <div>
        <h1 className='bloque_texto__titulo'>MISION</h1>
        <p className='bloque_texto__texto'>Los socios Ana Sofía Lamares y Diogo Capela, abogados portugueses, con profundo conocimiento y amplia experiencia en sus áreas, compartimos los mismos valores y visión sobre cómo trabajar.</p>
      </div>
      <div className='bloque_texto__link'>
        <Link to="/"><button className='bn3637 bn37'><span>Saber más</span></button></Link>
      </div>      
    </div>
  )
}

export default Somos