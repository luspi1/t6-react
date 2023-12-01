import React, { type FC, type ReactNode } from 'react'
import { type SelOption } from 'src/types/select'

import styles from './index.module.scss'
import { MainInput } from 'src/UI/MainInput/MainInput'
import cn from 'classnames'
import Select from 'react-select'

type SearchPanelProps = {
	selectOptions: SelOption[]
	searchConfig: {
		name: string
		placeholder: string
	}
	additionalNode?: ReactNode
}
export const SearchPanel: FC<SearchPanelProps & React.HTMLAttributes<HTMLDivElement>> = ({
	additionalNode,
	searchConfig: { name, placeholder },
	selectOptions,
	...props
}) => {
	return (
		<div className={cn(styles.searchPanelWrapper, props.className)}>
			{additionalNode}
			<form
				className={styles.searchPanel}
				action='#'
				onSubmit={(e) => {
					e.preventDefault()
				}}
			>
				<MainInput name={name} placeholder={placeholder} />
				<Select classNamePrefix='main-select' options={selectOptions} />
				<button type='submit'>Искать</button>
			</form>
		</div>
	)
}
