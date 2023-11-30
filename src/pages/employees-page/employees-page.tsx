import { type FC } from 'react'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { tableColTitles } from 'src/pages/employees-page/consts'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const mockEmployees = [
	[
		'1',
		'Постоянная',
		'Помощник',
		'Никанорова Василиса Константиновна (Вася)',
		'27.03.2023',
		'Активен',
	],
	['2', 'Временная', 'Вратарь', 'Иванов Иван Иванович (Оригинал)', '27.03.2023', 'Активен'],
]

export const EmployeesPage: FC = () => {
	return (
		<div>
			<CustomTable
				className={styles.employeesTable}
				colTitles={tableColTitles}
				cellsData={mockEmployees}
				additionalElements={[{ col: 6, el: <Link to='/'>Редактировать</Link> }]}
			/>
		</div>
	)
}
