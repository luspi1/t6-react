import { type FC, useEffect } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { schedulePointSchema, type SchedulePointInputs } from '../schema'

import { getEventsScheduleState } from 'src/store/events/events-schedule.selectors'

import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'

import { formatFormData } from 'src/helpers/utils'
import styles from './index.module.scss'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { DeleteCrossSvg } from 'src/UI/icons/deleteCrossSVG'
import { type Event } from 'src/types/event'

type SchedulePointProps = {
	schedulePointData?: Event
	deleteSchedulePoint: (id: string) => void
}

export const SchedulePoint: FC<SchedulePointProps> = ({
	schedulePointData,
	deleteSchedulePoint,
}) => {
	const { formData } = useAppSelector(getEventsScheduleState)
	const { setEventsSchedule } = useActions()

	const methods = useForm<SchedulePointInputs>({
		mode: 'onBlur',
		resolver: yupResolver(schedulePointSchema),
	})
	const onSubmit: SubmitHandler<SchedulePointInputs> = (data) => {
		const formatData = formatFormData<SchedulePointInputs>(data)
		console.log(formatData)
		setEventsSchedule({ formData: null })
	}

	useEffect(() => {
		methods.reset()
		if (formData) {
			formData.forEach((el) => {
				methods.setValue(el[0], el[1])
			})
		}
	}, [formData])

	return (
		<div className={styles.schedulePoint}>
			<h4>Пункт расписания {schedulePointData && +schedulePointData.id + 1}</h4>
			<FormProvider {...methods}>
				<form className={styles.employeeForm} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
					<section className={styles.topSection}>
						<div className={styles.schedulePointItem}>
							<p className={styles.schedulePointItemLabel}>Название пункта *</p>

							<div className={styles.schedulePointRow}>
								<div className={styles.inputContainer}>
									<ControlledInput
										name='pointTitle'
										placeholder='Название пункта расписания'
										value={schedulePointData?.name}
									/>
								</div>
								<p>
									Например, Пресс-конференция министра, Взвешивание бойцов или Финальные встречи
								</p>
							</div>
						</div>

						<div className={styles.schedulePointItem}>
							<p className={styles.schedulePointItemLabel}>Локация *</p>

							<div className={styles.schedulePointRow}>
								<div className={styles.inputContainer}>
									<ControlledSelect
										selectOptions={[{ label: 'Выбрать локацию из списка', value: '0' }]}
										name='pointLocation'
									/>
								</div>
								<p>
									В списке только те локации, которые Вы создали для этого события. Выберите нужную.
								</p>
							</div>
						</div>

						<div className={styles.schedulePointItem}>
							<p className={styles.schedulePointItemLabel}>Начало *</p>

							<div className={styles.schedulePointRow}>
								<div className={styles.inputContainer}>
									<ControlledDateInput
										type='date'
										name='pointStartDate'
										date={schedulePointData?.start}
									/>
									<ControlledDateInput
										type='time'
										name='pointStartTime'
										date={schedulePointData?.start}
									/>
								</div>
								<p>Укажите плановые дату и время начала и окончания пункта расписания.</p>
							</div>
						</div>

						<div className={styles.schedulePointItem}>
							<p className={styles.schedulePointItemLabel}>Окончание *</p>

							<div className={styles.schedulePointRow}>
								<div className={styles.inputContainer}>
									<ControlledDateInput
										type='date'
										name='pointEndDate'
										date={schedulePointData?.end}
									/>
									<ControlledDateInput
										type='time'
										name='pointEndTime'
										date={schedulePointData?.end}
									/>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.bottomSection}>
						<MainButton as='button' type='submit'>
							Сохранить пункт
						</MainButton>
					</section>
				</form>
			</FormProvider>

			{schedulePointData && +schedulePointData.id > 0 && (
				<button
					className={styles.deleteButton}
					onClick={() => deleteSchedulePoint(schedulePointData.id)}
				>
					<DeleteCrossSvg />
				</button>
			)}
		</div>
	)
}
