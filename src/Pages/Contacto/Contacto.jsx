import React from 'react'
import ButtonMailTo from '../../Components/Button/ButtonMailTo'


import "./Contacto.scss"

const Contacto = () => {
  return (
    <div className='contacto'><h1>Contacto</h1>
      <div>
        
        <ButtonMailTo mailto="mailto:no-reply@example.com">
          
        </ButtonMailTo>
      </div>
    </div>
  )
}

export default Contacto