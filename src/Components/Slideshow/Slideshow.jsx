import React from 'react'
import img1 from './../../Assets/Image/fondo.jpg'
import img2 from './../../Assets/Image/fondo2.jpg'
import img3 from './../../Assets/Image/fondo3.jpg'
import './Slideshow.scss';
import {ReactComponent as FlechaIzquierda} from './../../Assets/Image/iconmonstr-angel-left-thin.svg'
import {ReactComponent as FlechaDerecha} from './../../Assets/Image/iconmonstr-angel-right-thin.svg'

const Slideshow = () => {
  return (
    <div className='container'>
      <div className='container__containerSlideshow'>        
        <div className='container__containerSlideshow--slide'>
          <div>
            <img src={img1} alt=""></img>       
          </div>
          <div className='container__containerSlideshow--textoSlide'>
            <p>OPCION1 - Por que no aparezco en pantalla???</p>
          </div>
        </div>
        <div className='container__containerSlideshow--slide'>
          <img src={img2} alt=""></img>        
          <div className='container__containerSlideshow--textoSlide'>
            <p>OPCION2</p>
          </div>   
        </div>
        <div className='container__containerSlideshow--slide'>
          <img src={img3} alt=""></img>        
          <div className='container__containerSlideshow--textoSlide'>
            <p>OPCION3</p>
          </div>         
        </div>  
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



