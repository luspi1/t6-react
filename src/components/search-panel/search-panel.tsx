import React, { type FC, type ReactNode, type FormEvent } from 'react'
import { type SelOption } from 'src/types/select'

import { MainInput } from 'src/UI/MainInput/MainInput'
import cn from 'classnames'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { type FormDataWithEntries } from 'src/types/global'

import styles from './index.module.scss'

type SearchPanelProps = {
	selectOptions: SelOption[] | null
	searchConfig: {
		name: string
		placeholder: string
	}
	additionalNode?: ReactNode
	handleFormData: (data: FormDataWithEntries) => void
}
export const SearchPanel: FC<SearchPanelProps & React.HTMLAttributes<HTMLDivElement>> = ({
	additionalNode,
	searchConfig: { name, placeholder },
	selectOptions,
	handleFormData,
	...props
}) => {
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data: FormDataWithEntries = Object.fromEntries(formData.entries())
		handleFormData(data)
	}

	return (
		<div className={cn(styles.searchPanelWrapper, props.className)}>
			{additionalNode}
			<form className={styles.searchPanelForm} onSubmit={handleFormSubmit}>
				<MainInput className={styles.searchPanelInput} name={name} placeholder={placeholder} />

				{selectOptions && (
					<MainSelect
						className={styles.searchSelect}
						options={selectOptions}
						name='search_select'
					/>
				)}

				<MainButton type='submit' as='button'>
					Искать
				</MainButton>
			</form>
		</div>
	)
}
