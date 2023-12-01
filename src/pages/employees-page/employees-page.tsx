import { type FC } from 'react'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'
import { SearchPanel } from 'src/components/search-panel/search-panel'
import { employeeSelect } from 'src/pages/employees-page/consts'

export const EmployeesPage: FC = () => {
	return (
		<>
			<SearchPanel
				selectOptions={employeeSelect}
				searchConfig={{ name: 'employee_search', placeholder: 'Поиск по фамилии или имени' }}
			/>
			<EmployeesTable />
		</>
	)
}
