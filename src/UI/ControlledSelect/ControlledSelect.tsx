import React, { type FC } from 'react'
import Select from 'react-select'
import { type SelOption } from 'src/types/select'
import { Controller, useFormContext } from 'react-hook-form'
import { getValue } from 'src/helpers/utils'

type ControlledSelectProps = {
	selectOptions: SelOption[]
	name: string
}
export const ControlledSelect: FC<ControlledSelectProps> = ({ selectOptions, name }) => {
	const { control } = useFormContext()
	return (
		<div>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<Select
						classNamePrefix='main-select'
						defaultValue={selectOptions[0]}
						options={selectOptions}
						value={getValue(value, selectOptions)}
						onChange={(newValue) => onChange((newValue as SelOption).value)}
					/>
				)}
			/>
		</div>
	)
}
