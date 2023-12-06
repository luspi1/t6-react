import { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/employees-table/consts'
import { Link } from 'react-router-dom'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'

export const EmployeesTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')

	if (!data?.employees.tableEmployees) return <h3>Нет сотрудников</h3>

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
							<Link className={styles.editLink} to='/'>
								Редактировать
							</Link>
						),
					},
				]}
			/>
		</>
	)
}
