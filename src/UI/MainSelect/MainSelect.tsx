import React, { type FC, useState } from 'react'

import Select from 'react-select'
import { type SelOption } from 'src/types/select'

import styles from './index.module.scss'

type SelectProps = {
	options: SelOption[]
	name: string
	onChange?: (selectedOption: SelOption | SelOption[] | null) => void
	className?: string
}

export const MainSelect: FC<SelectProps> = ({ options, name, className }) => {
	const [selectValue, setSelectValue] = useState<SelOption | null>(options?.[0] ?? null)

	return (
		<Select
			className={styles.selectContainer}
			classNamePrefix={styles.select}
			value={selectValue}
			onChange={setSelectValue}
			options={options}
			defaultValue={options[0]}
			name={name}
		/>
	)
}
