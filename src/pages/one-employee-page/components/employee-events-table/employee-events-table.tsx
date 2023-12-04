import { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { formatTableData } from 'src/helpers/utils'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'

export const EmployeeEventsTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	return (
		<>
			{data?.employees?.employeesList?.events.length ? (
				<CustomTable
					className={styles.employeesTable}
					colTitles={tableColTitles}
					cellsData={formatTableData(data.employees.employeesList)}
				/>
			) : (
				<h3>Данных о мероприятиях не найдено</h3>
			)}
		</>
	)
}
