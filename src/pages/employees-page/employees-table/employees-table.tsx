import { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { formatTableData } from 'src/helpers/utils'
import { Link } from 'react-router-dom'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'

export const EmployeesTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	return (
		<>
			{data?.employees?.employeesList.length ? (
				<CustomTable
					className={styles.employeesTable}
					colTitles={tableColTitles}
					cellsData={formatTableData(data.employees.employeesList)}
					additionalElements={[
						{
							col: 6,
							el: (
								<Link className={styles.editLink} to='/'>
									Редактировать
								</Link>
							),
						},
					]}
				/>
			) : (
				<h3>Данных о сотрудниках не найдено</h3>
			)}
		</>
	)
}
