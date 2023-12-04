import { type FC, useState } from 'react'
import Select, { components } from 'react-select'

import styles from './index.module.scss'
import { OrgStatus } from 'src/modules/org-status/org-status'
import { ContractItem } from './components/contract/contract'
import { MainInput } from 'src/UI/MainInput/MainInput'
import { Button } from 'src/UI/Button/button'
import { SelectArrow } from 'src/UI/icons/selectArrow'
import { Pagination } from 'src/UI/Pagination/Pagination'

import { useGetUserByIdQuery } from 'src/store/user/user.api'

import { type SelOption } from 'src/types/select'
import { ContractItemBlock } from 'src/helpers/consts'
import { selectOptions } from 'src/helpers/selectOptions'

const customStyles = {
	control: () => ({
		width: '208px',
		border: '1px solid #C2CAC9',
		borderRadius: '5px',
		display: 'flex',
	}),

	option: () => ({
		fontSize: '14px',
		padding: '5px 10px',
		cursor: 'pointer',
	}),

	placeholder: () => ({ display: 'none' }),
}

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<p>
					<SelectArrow />
				</p>
			</components.DropdownIndicator>
		)
	)
}

export const ContractPage: FC = () => {
	const { data: userData } = useGetUserByIdQuery('0')
	const [selectedOption, setSelectedOption] = useState<null | SelOption>(selectOptions[0])

	return (
		<div>
			<OrgStatus />

			<div className={styles.contractsList}>
				{userData?.contracts?.length ? (
					userData?.contracts.map((item) => (
						<ContractItem key={item.id} contractData={item} type={ContractItemBlock.Contract} />
					))
				) : (
					<ContractItem type={ContractItemBlock.Contract} />
				)}
			</div>

			<div className={styles.controlPanel}>
				<h3>Платежи организатора</h3>
				<MainInput placeholder='Поиск по названию' />

				<Select
					defaultValue={selectedOption}
					onChange={() => setSelectedOption}
					options={selectOptions}
					styles={customStyles}
					className={styles.customSelect}
					components={{
						IndicatorSeparator: () => null,
						DropdownIndicator,
					}}
				/>

				<Button className={styles.searchButton}>Искать</Button>
			</div>

			<div className={styles.contractsList}>
				{userData?.contracts?.length ? (
					userData?.payments?.map((item) => (
						<ContractItem key={item.id} contractData={item} type={ContractItemBlock.Payment} />
					))
				) : (
					<ContractItem type={ContractItemBlock.Payment} />
				)}
			</div>

			<Pagination paginationSteps={[1, 2, 3, 4, 5]} />
		</div>
	)
}
