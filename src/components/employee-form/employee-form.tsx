import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from 'src/components/employee-form/schema'
import { ModalControlledField } from 'src/components/modal-controlled-field/modal-controlled-field'

export const EmployeeForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FieldValues>({
		mode: 'onBlur',
		resolver: yupResolver(employeeSchema),
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<ModalControlledField control={control} name='secondName' type='text' errors={errors} />
			<ModalControlledField control={control} name='name' type='text' errors={errors} />
			<ModalControlledField control={control} name='patronymficName' type='text' errors={errors} />
			<ModalControlledField control={control} name='alias' type='text' errors={errors} />
			<ModalControlledField control={control} name='email' type='text' errors={errors} />
			<ModalControlledField control={control} name='mobileNumber' type='text' errors={errors} />
			<ModalControlledField control={control} name='password' type='text' errors={errors} />
			<ModalControlledField control={control} name='passwordRepeat' type='text' errors={errors} />
			<button type='submit'>Отправить</button>
		</form>
	)
}
