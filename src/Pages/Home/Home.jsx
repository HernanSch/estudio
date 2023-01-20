import React from 'react'
import Carrusel from '../../Components/Carrusel/Carrusel'
import Somos from '../../Components/Somos/Somos'
import Valores from '../../Components/Valores/Valores'
import Mision from '../../Components/Mision/Mision'
import './Home.scss'
import Formulario from '../../Components/Formulario/Formulario'

const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
        <Carrusel></Carrusel>
      <div className='home__bloque1'>
        <Somos></Somos>
        <Valores></Valores>
        <Mision></Mision>
      </div>
      <div className='home__formulario'>
        <Formulario></Formulario>
      </div>
      
    </div>
  )
}

export default Home