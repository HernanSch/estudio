import React from 'react'
import '../../Estilos/Estilos.scss'
import Carrusel2 from '../../Components/Carrusel2/Carrusel2'
import Somos from '../../Components/Somos/Somos'
import Valores from '../../Components/Valores/Valores'
import Mision from '../../Components/Mision/Mision'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
      <Carrusel2></Carrusel2>
      <div className='bloque1'>
        <Somos></Somos>
        <Valores></Valores>
        <Mision></Mision>
      </div>
      
    </div>
  )
}

export default Home