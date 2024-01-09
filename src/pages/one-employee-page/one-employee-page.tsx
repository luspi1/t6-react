import { type FC } from 'react'
import { type FormDataWithEntries } from 'src/types/global'
import { EmployeeInfo } from 'src/pages/one-employee-page/components/employee-info/employee-info'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { Pagination } from 'src/components/pagination/pagination'

import { EventSelectOptions } from 'src/pages/one-employee-page/consts'

import { EmployeeEventsTable } from 'src/pages/one-employee-page/components/employee-events-table/employee-events-table'

import styles from './index.module.scss'

export const OneEmployeePage: FC = () => {
	const getSearchPanelValues = (data: FormDataWithEntries) => {
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
