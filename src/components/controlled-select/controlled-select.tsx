import React, { type FC } from 'react'
import Select from 'react-select'
import { type SelOption } from 'src/types/select'
import { Controller, useFormContext } from 'react-hook-form'

import styles from './index.module.scss'
import { PromptSvg } from 'src/UI/icons/promptSVG'
import { getValue } from 'src/helpers/utils'

type ControlledSelectProps = {
	selectOptions: SelOption[]
	name: string
	label?: string
	promptTitle?: string
}
export const ControlledSelect: FC<ControlledSelectProps> = ({
	selectOptions,
	name,
	label,
	promptTitle,
}) => {
	const { control } = useFormContext()

	return (
		<div className={styles.selectWrapper}>
			{label && <label>{label}</label>}
			<Controller
				name={name}
				control={control}
				defaultValue={selectOptions[0].value}
				render={({ field: { onChange, value } }) => (
					<Select
						className='main-select-container'
						classNamePrefix='main-select'
						options={selectOptions}
						value={getValue(value, selectOptions)}
						onChange={(newValue) => {
							onChange((newValue as SelOption).value)
						}}
					/>
				)}
			/>
			{promptTitle && (
				<span title={promptTitle}>
					<PromptSvg />
				</span>
			)}
		</div>
	)
}
