import React from 'react'
import img1 from './../../Assets/Image/fondo.jpg'


import {ReactComponent as FlechaIzquierda1} from './../../Assets/Image/line-angle-left-icon.svg'
import {ReactComponent as FlechaDerecha1} from './../../Assets/Image/arrow-thin-chevron-right-icon.svg'

const Slideshow = () => {
  return (
    <div>
        <div>
            <img src={img1} alt=""></img>
        </div>
        <div>
          <button>
            <FlechaIzquierda1 />
          </button>
          <button>
            <FlechaDerecha1 />
          </button>
        </div>
    </div>
  )
}

export default Slideshow 



