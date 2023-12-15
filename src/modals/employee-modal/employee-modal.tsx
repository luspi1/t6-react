import { Modal } from 'src/components/modal/modal'

import styles from './index.module.scss'
import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { employeeSchema, type Inputs } from 'src/modals/employee-modal/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { formatFormData } from 'src/helpers/utils'

type EmployeeModalProps = {
	activeEmployeeModal: boolean
	setActiveEmployeeModal: (arg: boolean) => void
	handleSubmit: (data: FormData) => void
	isEdit?: boolean
}

export const EmployeeModal: FC<EmployeeModalProps> = ({
	setActiveEmployeeModal,
	activeEmployeeModal,
	handleSubmit,
	isEdit,
}) => {
	const methods = useForm<Inputs>({ mode: 'onBlur', resolver: yupResolver(employeeSchema) })

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const formatData = formatFormData<Inputs>(data)
		handleSubmit(formatData)
	}

	return (
		<Modal
			className={styles.employeeModal}
			active={activeEmployeeModal}
			setActive={setActiveEmployeeModal}
		>
			<h4>Добавление сотрудника</h4>
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
						<ControlledInput
							name='secondName'
							label='Фамилия'
							promptTitle='Подсказка про фамилию'
						/>
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
					{isEdit && (
						<section className={styles.fireSection}>
							<p>
								Уволенный сотрудник будет перемещен в список кадрового резерва. В случае
								необходимости, Вы сможете принять его обратно.
							</p>
							<button type='button'>Уволить сотрудника</button>
						</section>
					)}
				</form>
			</FormProvider>
		</Modal>
	)
}
