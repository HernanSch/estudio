import React, { useRef} from 'react'
import "bootstrap/dist/js/bootstrap.bundle"
import emailjs from '@emailjs/browser';
import './Formulario.scss'

const Formulario  = () =>  {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            'service_oh92ohi', 
            'template_b08av83', 
            form.current, 
            'ndJpUY8dQjxQIsGob'
        )
        .then(
            (result) => {
                console.log(result.text);
                console.log("mensaje enviado");
        },  (error) => {
                console.log(error.text);
        }
      );
    };
  
    return (
      <form className='formulario' ref={form} onSubmit={sendEmail}>
        <h2>Contactenos</h2>
        
        <input type="text" placeholder='Nombre' name="nombre" />
        
        <input type="text" placeholder='Apellidos' name="apellidos" />
        
        <input type="number" placeholder='Telefono' name="telefono" />
        
        <input type="email" placeholder='Correo Electrónico' name="email" />
        
        <textarea name="mensaje" placeholder='Mensaje' />

        <input type="submit" value="Send" />
      </form>
    );
  };

export default Formulario