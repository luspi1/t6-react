import { type FC } from 'react'
import { EmployeeInfo } from 'src/pages/one-employee-page/components/employee-info/employee-info'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { type SearchPanelData } from 'src/types/searchPanel'

import { EventSelectOptions } from 'src/pages/one-employee-page/consts'

import styles from './index.module.scss'
import { EmployeeEventsTable } from 'src/pages/one-employee-page/components/employee-events-table/employee-events-table'
import { Pagination } from 'src/components/pagination/Pagination'

export const OneEmployeePage: FC = () => {
	const getSearchPanelValues = (data: SearchPanelData) => {
		console.log(data)
	}
	return (
		<div className={styles.oneEmployeePage}>
			<EmployeeInfo />
			<SearchPanel
				additionalNode={<h4 className={styles.eventSearchTitle}>Список мероприятий</h4>}
				selectOptions={EventSelectOptions}
				searchConfig={{ name: 'event_search', placeholder: 'Поиск по названию мероприятия' }}
				handleFormData={getSearchPanelValues}
			/>
			<EmployeeEventsTable />
			<Pagination pagesCount={5} activePage={2} />
		</div>
	)
}
