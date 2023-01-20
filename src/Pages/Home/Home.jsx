import React from 'react'
import Carrusel2 from '../../Components/Carrusel2/Carrusel2'
import Somos from '../../Components/Somos/Somos'
import Valores from '../../Components/Valores/Valores'
import Mision from '../../Components/Mision/Mision'
import './Home.scss'
import FormikV2 from '../../Components/FormikV2/FormikV2'

const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
        <Carrusel2></Carrusel2>
      <div className='home__bloque1'>
        <Somos></Somos>
        <Valores></Valores>
        <Mision></Mision>
      </div>
      <div className='home__formulario'>
        <FormikV2></FormikV2>
      </div>
      
    </div>
  )
}

export default Home