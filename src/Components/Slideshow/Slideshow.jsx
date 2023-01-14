import React from 'react'
import img1 from './../../Assets/Image/fondo.jpg'

import {ReactComponent as FlechaIzquierda} from './../../Assets/Image/iconmonstr-arrow-left-thin.png'
import {ReactComponent as FlechaDerecha} from './../../Assets/Image/iconmonstr-arrow-right-thin.png'

const Slideshow = () => {
  return (
    <div>
        <div>
            <img src={img1} alt=""></img>
        </div>
        <div>
          <button>
            <FlechaIzquierda />
          </button>
          <button>
            <FlechaDerecha />
          </button>
        </div>
    </div>
  )
}

export default Slideshow 



