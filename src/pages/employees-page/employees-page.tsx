import { type FC } from 'react'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'

export const EmployeesPage: FC = () => {
	return (
		<div>
			<p>Сотрудники</p>
			<EmployeesTable />
		</div>
	)
}
