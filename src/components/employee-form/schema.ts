import * as yup from 'yup'

export const employeeSchema = yup.object({
	secondName: yup.string().required('Введите фамилию'),
	// name: yup.string().required('Введите имя'),
	// email: yup.string().email('неправильный формат email').required('Введите e-mail'),
	// mobileNumber: yup.string().required('Введите номер'),
	// password: yup.string().required('Введите пароль'),
	// passwordRepeat: yup.string().required('Введите пароль повторно'),
})
