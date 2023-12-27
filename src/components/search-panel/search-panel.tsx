import React, { type FC, type ReactNode, useState } from 'react'
import { type SelOption } from 'src/types/select'

import styles from './index.module.scss'
import { MainInput } from 'src/UI/MainInput/MainInput'
import cn from 'classnames'
import Select from 'react-select'
import { type SearchPanelData } from 'src/types/searchPanel'
import { MainButton } from 'src/UI/MainButton/MainButton'

type SearchPanelProps = {
	selectOptions: SelOption[] | null
	searchConfig: {
		name: string
		placeholder: string
	}
	additionalNode?: ReactNode
	handleFormData: (values: SearchPanelData) => void
}
export const SearchPanel: FC<SearchPanelProps & React.HTMLAttributes<HTMLDivElement>> = ({
	additionalNode,
	searchConfig: { name, placeholder },
	selectOptions,
	handleFormData,
	...props
}) => {
	const [inputValue, setInputValue] = useState<string>('')
	const [selectValue, setSelectValue] = useState<SelOption | null>(selectOptions?.[0] ?? null)

	return (
		<div className={cn(styles.searchPanelWrapper, props.className)}>
			{additionalNode}
			<form
				className={styles.searchPanelForm}
				action='#'
				onSubmit={(e) => {
					e.preventDefault()
					const formData: SearchPanelData = {
						inputValue,
						selectValue,
					}
					handleFormData(formData)
				}}
			>
				<MainInput
					className={styles.searchPanelInput}
					name={name}
					placeholder={placeholder}
					value={inputValue}
					onChange={(e) => setInputValue(e.currentTarget.value)}
				/>
				{!!selectOptions?.length && (
					<Select
						classNamePrefix='main-select'
						options={selectOptions}
						value={selectValue}
						defaultValue={selectOptions[0]}
						onChange={setSelectValue}
					/>
				)}
				<MainButton type='submit' as='button'>
					Искать
				</MainButton>
			</form>
		</div>
	)
}
