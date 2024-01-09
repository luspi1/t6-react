import { type FC } from 'react'

import { OrgStatus } from 'src/modules/org-status/org-status'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { DocList } from 'src/pages/contract-page/components/doc-list/doc-list'

import { Pagination } from 'src/components/pagination/pagination'
import { useGetAllContractsQuery, useGetAllPaymentsQuery } from 'src/store/contracts/contracts.api'
import { ContractSelectOptions } from 'src/pages/contract-page/consts'
import styles from './index.module.scss'
import { type FormDataWithEntries } from 'src/types/global'

export const ContractPage: FC = () => {
	const { data: allContracts } = useGetAllContractsQuery(null)
	const { data: allPayments } = useGetAllPaymentsQuery(null)
	const getSearchPanelValues = (data: FormDataWithEntries) => {
		console.log(data)
	}

	return (
		<div>
			<OrgStatus />
			<DocList contracts={allContracts} />
			<SearchPanel
				additionalNode={<h4 className={styles.contractSearchTitle}>Платежи организатора</h4>}
				selectOptions={ContractSelectOptions}
				searchConfig={{
					name: 'org_payments',
					placeholder: 'Поиск по названию',
				}}
				handleFormData={getSearchPanelValues}
			/>
			<DocList contracts={allPayments} />
			<Pagination pagesCount={5} activePage={2} />
		</div>
	)
}
