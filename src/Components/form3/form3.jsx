import { Formik } from 'formik';
import React, {useState} from 'react';

const Form3 = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
                initialValues={{
                    nombre: '',
                    correo: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    //Valiudacion nombre
                    if(!valores.nombre){
                        errores.nombre = 'Por favor introduzca un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'EL nombre solo puede contener letras y espacios'
                    }
                    //Valiudacion correo
                    if(!valores.correo){
                        errores.correo = 'Por favor introduzca un correo electrónico'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Introduzca un correo válido'
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log(valores)
                    console.log('Formulario enviado')
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false),5000);
                }}           
            >
                {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                <form className='formulario' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                        type="text" 
                        id="nombre" 
                        placeholder="Nombre" 
                        value={values.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        >                        
                        </input>                        
                        {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}                        
                    </div>
                    <div>
                        <label htmlFor="correo">Correo</label>
                        <input 
                        type="email" 
                        id="correo" 
                        placeholder="Correo eletrónico" 
                        value={values.correo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        >                        
                        </input>
                        {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
                    </div>
                    <button type='submit'>Enviar</button>
                    {formularioEnviado && <p className='exito'>Formulario enviado correctamente</p>}
                </form>
                )}
            </Formik>
		</>
	);
}
 
export default Form3;