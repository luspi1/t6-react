import React, { type FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-time-picker/dist/TimePicker.css'

import cn from 'classnames'
import styles from './index.module.scss'
import { DatepickerSvg } from 'src/UI/icons/datepickerSVG'
import { TimepickerSvg } from 'src/UI/icons/timepickerSVG'

type ControlledDateInputProps = {
	type: 'date' | 'time'
	className?: string
	label?: string
	name: string
	date?: Date
}

export const ControlledDateInput: FC<ControlledDateInputProps> = ({
	date,
	type,
	name,
	className,
	label,
	...props
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const [startDate, setStartDate] = useState(date && new Date(date))
	const [startTime, setStartTime] = useState(date && new Date(date))

	return (
		<div className={cn(styles.datepickerContainer, className)}>
			{type === 'date' ? (
				<>
					<DatePicker
						{...register(name)}
						{...props}
						dateFormat='dd.MM.yy'
						placeholderText={'дд.мм.гг'}
						selected={startDate}
						onChange={(date: Date) => {
							setStartDate(date)
						}}
						className={cn(styles.controlledInput, {
							[styles.noValid]: errors[name],
						})}
					/>
					<DatepickerSvg />
				</>
			) : (
				<>
					<DatePicker
						{...register(name)}
						{...props}
						placeholderText={'чч.мм'}
						selected={startTime}
						onChange={(date: Date) => {
							setStartTime(date)
						}}
						className={cn(styles.controlledInput, {
							[styles.noValid]: errors[name],
						})}
						showTimeSelect
						showTimeSelectOnly
						timeIntervals={60}
						timeCaption='Выберите время'
						dateFormat='HH:mm'
						timeFormat='HH:mm'
					/>
					<TimepickerSvg />
				</>
			)}
		</div>
	)
}
