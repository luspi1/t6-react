import { type FC } from 'react'

import { type SearchPanelData } from 'src/types/searchPanel'
import styles from './index.module.scss'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import { OrgStatus } from 'src/modules/org-status/org-status'
import { TariffInfo } from './components/tariff-info/tariff-info'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { PaymentsTable } from 'src/pages/tariffs-page/components/payments-table/payments-table'
import { Pagination } from 'src/components/pagination/pagination'

export const TariffsPage: FC = () => {
	const { data } = useGetUserByIdQuery('0')
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}

	return (
		<>
			<OrgStatus />
			<TariffInfo currentTariffInfo={data?.currentTariffInfo} />
			<SearchPanel
				additionalNode={<h4>Платежи организатора</h4>}
				selectOptions={null}
				searchConfig={{
					name: 'org_payments',
					placeholder: 'Поиск по названию',
				}}
				handleFormData={getSearchPanelValues}
				className={styles.tariffInfoSearchPanel}
			/>
			<PaymentsTable />
			<Pagination pagesCount={5} activePage={2} />
		</>
	)
}
