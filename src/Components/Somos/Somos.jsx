import React from 'react'
import { Link } from 'react-router-dom'
import './../Mision/Mision.scss'

const Somos = () => {
  return (
    <div className='bloque_texto'>
      <div>
        <h1 className='bloque_texto__titulo'>QUIENES SOMOS</h1>
        <p className='bloque_texto__texto'>La selección de fútbol de Argentina es el equipo formado por jugadores de nacionalidad argentina representativo de dicho país a través de la Asociación del Fútbol Argentino (AFA) en las competiciones oficiales organizadas por la Confederación Sudamericana de Fútbol (Conmebol), ente rector de ese deporte en América del Sur, y por la Federación Internacional de Fútbol Asociación (FIFA). Es campeona vigente a nivel confederativo, interconfederativo y mundial.</p>
      </div>
      <div className='bloque_texto__link'>
        <Link to="/"><button className='bn3637 bn37'><span>Saber más</span></button></Link>
      </div>  
    </div>
  )
}

export default Somos