import { useForm } from 'react-hook-form';
import { validateField, validateEmail } from '../../Hooks/useValidation';

const Formulario2 = () => {
	const { values, setFieldValue, errors, handleSubmit } = useForm({
		
		initialValues: {
			nombre: '',
			apellidos: '',
			email: ''
		},
		
		validate: (property, value) => {
			
			const errorObj = {};

			switch (property) {
				case 'nombre':
					const testNombre = validateField({
						name: property,
						value,
						required: 'Por favor ingresa un nombre.',
						min: 6,
						shortValue: 'Ingresa un valor menor a 6 carácteres'
					});
					Object.assign(errorObj, testNombre);
					break;
				case 'apellidos':
					const testApellidos = validateField({
						name: property,
						value,
						required: 'Por favor ingresa un apellido.',
						min: 8,
						shortValue: 'Ingresa un valor menor a 8 carácteres'
					});
					Object.assign(errorObj, testApellidos);
					break;
				case 'email':
					
					const testEmail = validateEmail({
						value,
						required: 'Por favor ingresa un email',
						validEmail: 'El email que has ingresado no es correcto'
					});
					Object.assign(errorObj, testEmail);
					break;
			}

			return errorObj;
			
		},
		onSubmit: ({
			values,
			resetForm
		}) => {
			alert('You are logged');
			
		}
	})

	return (
		<form id="container" onSubmit={handleSubmit}>
			<h2>Formulario:</h2>
			<input
				type="text"
				value={values.name}
				className="textInput"
				placeholder="Ingresa un nombre"
				onChange={e => setFieldValue('name', e.target.value)}
			/>

			{errors.name && <span className="error-message">{errors.name}</span>}

			<input
				type="text"
				value={values.surname}
				className="textInput"
				placeholder="Ingresa un apellido"
				onChange={e => setFieldValue('surname', e.target.value)}
			/>

			{errors.surname && <span className="error-message">{errors.surname}</span>}

			<input
				type="text"
				value={values.email}
				className="textInput"
				placeholder="Ingresa un email"
				onChange={e => setFieldValue('email', e.target.value)}
			/>

			{errors.email && <span className="error-message">{errors.email}</span>}

			<button type="submit" id="button">Enviar</button>
		</form>
	);
}

export default Formulario2;