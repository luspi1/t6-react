import React, { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import { getEmployeeNameInputs } from 'src/store/modals/modals.selectors'
import { type EmployeeFormData } from 'src/modals/employee-modal/schema'

export const EmployeesTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	const { setActiveEmployee, setEmployeeFormData } = useActions()
	const employeeNameInputs = useAppSelector(getEmployeeNameInputs)

	const handleEditEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!data?.employees) return
		setActiveEmployee(true)
		const employeeId = e.currentTarget.closest('tr')?.dataset.idx
		const searchedEmployee = data.employees.employeesList.find(
			(employee) => employee.id === employeeId,
		)
		if (searchedEmployee) {
			const filteredEmployeeData = Object.entries(searchedEmployee).filter(([key]) =>
				employeeNameInputs.includes(key),
			) as EmployeeFormData
			setEmployeeFormData(filteredEmployeeData)
		}
	}

	if (!data?.employees) return <h3>Нет сотрудников</h3>

	return (
		<>
			<CustomTable
				className={styles.employeesTable}
				colTitles={tableColTitles}
				cellsData={data.employees.tableEmployees}
				additionalElements={[
					{
						col: 6,
						el: (
							<button className={styles.editLink} onClick={handleEditEmployee} type='button'>
								Редактировать
							</button>
						),
					},
				]}
			/>
		</>
	)
}
