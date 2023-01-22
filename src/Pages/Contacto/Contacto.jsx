import React from 'react'
import ButtonMailTo from '../../Components/Button/ButtonMailTo'


import "./Contacto.scss"

const Contacto = () => {
  return (
    <div className='contacto'><h1>Contacto</h1>
      

      <ButtonMailTo label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
      
      
    </div>
      
  )
}

export default Contacto