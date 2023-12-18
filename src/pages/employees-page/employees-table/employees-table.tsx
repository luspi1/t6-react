import React, { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { useGetEmployeeByIdQuery, useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'

export const EmployeesTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	const { setActiveEmployee } = useActions()
	const { data: currentEmployee } = useGetEmployeeByIdQuery('0')

	const handleEditEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
		setActiveEmployee(true)
		const employeeId = e.currentTarget.closest('tr')?.dataset.idx

		console.log(employeeId)
		console.log(currentEmployee)
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
