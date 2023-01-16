import React from 'react'
import '../../Estilos/Estilos.scss'


import Carrusel from '../../Components/Carrusel/Carrusel'

const Home = () => {
  return (
    <div className='home'>
    <h1>Home</h1>      
      <div className='home__carrusel'>
        <Carrusel></Carrusel>
      </div>    
      
    </div>
  )
}


export default Home