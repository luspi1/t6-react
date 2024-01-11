import * as yup from 'yup'
import { type FieldPathValue } from 'react-hook-form'

export type SchedulePointInputs = {
	name: string
	location: string
	startDate: Date
	startTime: Date
	endDate: Date
	endTime: Date
}

export const schedulePointInputNames = [
	'pointTitle',
	'pointLocation',
	'pointStartDate',
	'pointStartTime',
	'pointEndDate',
	'pointEndTime',
]

export type SchedulePointFormData = Array<
	[keyof SchedulePointInputs, FieldPathValue<SchedulePointInputs, keyof SchedulePointInputs>]
>

export const schedulePointSchema = yup.object({
	name: yup
		.string()
		.required('Введите название пункта')
		.matches(/^[A-Za-zА-Яа-яz0-9]+$/, 'Допускаются только буквы и цифры'),
	location: yup.string().required('Выберите локацию'),

	startDate: yup.date().required('Выберите плановую дату начала'),
	startTime: yup.date().required('Выберите время начала'),

	endDate: yup.date().required('Выберите плановую дату окончания'),
	endTime: yup.date().required('Выберите время окончания'),
})
