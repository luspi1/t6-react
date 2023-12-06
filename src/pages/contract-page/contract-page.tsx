import { type FC } from 'react'
import { type SearchPanelData } from 'src/types/searchPanel'

import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { ContractSelectOptions } from 'src/pages/contract-page/consts'

import { OrgStatus } from 'src/modules/org-status/org-status'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { ContractsList } from 'src/pages/contract-page/components/contracts-list/contracts-list'

import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const ContractPage: FC = () => {
	const { data: userData } = useGetUserByIdQuery('0')
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}
	return (
		<div>
			<OrgStatus />
			<ContractsList contracts={userData?.contracts} />
			<SearchPanel
				additionalNode={<h4 className={styles.contractSearchTitle}>Платежи организатора</h4>}
				selectOptions={ContractSelectOptions}
				searchConfig={{
					name: 'org_payments',
					placeholder: 'Поиск по названию',
				}}
				handleFormData={getSearchPanelValues}
			/>
			<ContractsList contracts={userData?.payments} />
			<Pagination pagesCount={5} activePage={2} />
		</div>
	)
}
