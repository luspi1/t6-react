import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from 'src/components/employee-form/schema'
import { ModalControlledField } from 'src/components/modal-controlled-field/modal-controlled-field'
import { type FC } from 'react'
import { positiveNumber } from 'src/helpers/masks'

type Inputs = {
	secondName: string
	// name: string
	// email: string
	// mobileNumber: string
	// password: string
	// passwordRepeat: string
	// patronymicName?: string
	// alias?: string
}

export const EmployeeForm: FC = () => {
	const methods = useForm<Inputs>({ mode: 'onBlur', resolver: yupResolver(employeeSchema) })

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
	}
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
				<ModalControlledField name='secondName' type='text' mask='99.9999' />
				{/* <ModalControlledField name='name' type='text' /> */}
				{/* <ModalControlledField name='patronymicName' type='text' /> */}
				{/* <ModalControlledField name='alias' type='text' /> */}
				{/* <ModalControlledField name='email' type='text' /> */}
				{/* <ModalControlledField name='mobileNumber' type='text' /> */}
				{/* <ModalControlledField name='password' type='text' /> */}
				{/* <ModalControlledField name='passwordRepeat' type='text' /> */}

				<button type='submit'>Отправить</button>
			</form>
		</FormProvider>
	)
}
