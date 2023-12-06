import { type FC } from 'react'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { tableColTitles } from 'src/pages/one-employee-page/components/employee-events-table/consts'

import styles from './index.module.scss'

export const EmployeeEventsTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')
	if (!data?.employees.employeesList[1].tableEvents.length)
		return <h3>Данных о мероприятиях не найдено</h3>
	return (
		<>
			<CustomTable
				className={styles.employeeEventsTable}
				colTitles={tableColTitles}
				cellsData={data.employees.employeesList[1].tableEvents}
			/>
		</>
	)
}
