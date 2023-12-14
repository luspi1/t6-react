import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema } from 'src/components/employee-form/schema'
import { type FC } from 'react'

import styles from './index.module.scss'
import { formatFormData } from 'src/helpers/utils'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

type Inputs = {
	secondName: string
	name: string
	email: string
	mobileNumber: string
	password: string
	confirmPassword: string
	typeAcc?: string
	typeEmployee?: string
	position?: string
	patronymicName?: string
	alias?: string
	isServiceAcc?: boolean
	isActiveEmployee?: boolean
}

export const EmployeeForm: FC = () => {
	const methods = useForm<Inputs>({ mode: 'onBlur', resolver: yupResolver(employeeSchema) })

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const formatData = formatFormData<Inputs>(data)
		console.log(formatData)
	}
	return (
		<FormProvider {...methods}>
			<form className={styles.employeeForm} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
				<section>
					<ControlledSelect
						selectOptions={[
							{ label: 'Постоянный сотрудник', value: '1' },
							{ label: 'Временный сотрудник', value: '2' },
						]}
						name='typeEmployee'
						label='Тип занятости'
						promptTitle='Подсказка про тип занятости'
					/>
					<ControlledSelect
						selectOptions={[
							{ label: 'Вратарь', value: '1' },
							{ label: 'Музыкант', value: '2' },
						]}
						name='position'
						label='Должность'
						promptTitle='Подсказка про должность'
					/>
				</section>
				<section>
					<ControlledInput name='secondName' label='Фамилия' promptTitle='Подсказка про фамилию' />
					<ControlledInput name='name' label='Имя' promptTitle='Подсказка про имя' />
					<ControlledInput
						name='patronymicName'
						label='Отчество'
						promptTitle='Подсказка про отчество'
					/>
					<ControlledInput name='alias' label='Позывной' promptTitle='Подсказка про позывной' />
				</section>
				<section>
					<ControlledInput
						name='isServiceAcc'
						label='Создать служебную учетную запись'
						type='checkbox'
					/>
					<ControlledInput name='email' label='E-mail' promptTitle='Подсказка про email' />
					<ControlledInput
						name='mobileNumber'
						label='Мобильный телефон'
						promptTitle='Подсказка про телефон'
						mask='+7 (999) 999-99-99'
					/>
					<ControlledInput
						name='password'
						type='password'
						label='Пароль'
						promptTitle='Подсказка про пароль'
					/>
					<ControlledInput
						name='confirmPassword'
						type='password'
						label='Повторить пароль'
						promptTitle='Подсказка про пароль'
					/>
					<ControlledSelect
						selectOptions={[
							{ label: 'Вратарь', value: '1' },
							{ label: 'Участник', value: '2' },
						]}
						name='typeAcc'
						label='Тип учетной записи'
						promptTitle='Подсказка про тип уч. записи'
					/>
				</section>
				<section className={styles.bottomSection}>
					<ControlledInput
						className={styles.activeEmployeeInput}
						name='isActiveEmployee'
						label='Сотрудник активен'
						type='checkbox'
					/>
					<button type='submit'>Сохранить изменения</button>
				</section>
			</form>
		</FormProvider>
	)
}
