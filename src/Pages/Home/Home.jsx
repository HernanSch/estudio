import React from 'react'
import '../../Estilos/Estilos.scss'
import Slideshow from '../../Components/Slideshow/Slideshow'
import styled from 'styled-components'

const Home = () => {
  return (
    <div className='home'>
      <Titulo>Home</Titulo>
      <Slideshow></Slideshow>
      
    </div>
  )
}

const Titulo = styled.p`
    font-size:18px;
    font-wight: 700;
    text-transform: uppercase;
    margin-bottom: 10px  ;
`;

export default Home