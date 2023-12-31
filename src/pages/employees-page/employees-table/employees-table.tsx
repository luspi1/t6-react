import React, { type FC } from 'react'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'
import { type EmployeeFormData, employeeInputNames } from 'src/modals/employee-modal/schema'

export const EmployeesTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	const { setEmployeeModal } = useActions()
	const handleEditEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
		const employeeId = e.currentTarget.closest('tr')?.dataset.idx
		const searchedEmployee = data?.employees.employeesList.find(
			(employee) => employee.id === employeeId,
		)
		if (searchedEmployee) {
			const filteredEmployeeData = Object.entries(searchedEmployee).filter(([key]) =>
				employeeInputNames.includes(key),
			) as EmployeeFormData
			setEmployeeModal({ formData: filteredEmployeeData, isActive: true, isEdit: true })
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
							<MainButton className={styles.editLink} onClick={handleEditEmployee} as='button'>
								Редактировать
							</MainButton>
						),
					},
				]}
			/>
		</>
	)
}
