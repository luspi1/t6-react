import { type FC } from 'react'
import { EmployeesTable } from 'src/pages/employees-page/employees-table/employees-table'

export const EmployeesPage: FC = () => {
	return (
		<>
			<p>Сотрудники</p>
			<EmployeesTable />
		</>
	)
}
