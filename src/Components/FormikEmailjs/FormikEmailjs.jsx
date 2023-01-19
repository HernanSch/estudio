import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, {useState,useRef} from 'react';
import emailjs from '@emailjs/browser';

const Form3 = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const form = useRef();
  
    const SendEmail = (e) => {
        
        e.preventDefault();

        emailjs.sendForm(
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
		<>
			<Formik
                initialValues={{
                    nombre: '',
                    correo: '',
                    pais: '',
                    mensaje: ''
                }}
                
                validate={(valores) => {
                    let errores = {};

                    //Valiudacion nombre
                    if(!valores.nombre){
                        errores.nombre = 'Por favor introduzca un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = 'Introduzca un nombre valido'
                    }
                    //Valiudacion correo
                    if(!valores.correo){
                        errores.correo = 'Por favor introduzca un correo electrónico'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'Introduzca un correo válido'
                    }

                    return errores;
                }}
                onSubmit={(valores, {resetForm, actions}) => {
                    resetForm();
                    console.log(valores)
                    console.log('Formulario enviado')
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false),5000);
                    setTimeout(() => {
                    SendEmail(valores)
                    actions.setSubmitting(false)
                    }, 1000)
                }}           
            >
                {( {values, errors} ) => (
                <Form className='formulario'>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Field 
                            type="text" 
                            id="nombre" 
                            name="nombre"
                            placeholder="Nombre" 
                        />
                        <ErrorMessage name='nombre' component={() => (
                            <div className='error'>{errors.nombre}</div>
                        )} />                        
                                       
                    </div>
                    <div>
                        <label htmlFor="correo">Correo</label>
                        <Field 
                        type="email" 
                        id="correo" 
                        name="correo"
                        placeholder="Correo eletrónico"                         
                        />                        
                        <ErrorMessage name='correo' component={() => (
                            <div className='error'>{errors.correo}</div>
                        )} /> 
                    </div>
                    <div>
                        <Field name="pais" as="select">
                            <option value="Argentina">Argentina</option>
                            <option value="España">España</option>
                            <option value="Mexico">Mexico</option>
                        </Field>
                    </div>
                    <div>
                        <Field name="mensaje" as="textarea" placeholder="Mensaje">

                        </Field>
                    </div>
                    <button type='submit'>Enviar</button>
                    {formularioEnviado && <p className='exito'>Formulario enviado correctamente</p>}
                </Form>
                )}
            </Formik>
		</>
	);
}
 
export default Form3;