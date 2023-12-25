import { type FC } from 'react'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { tableColTitles } from 'src/pages/tariffs-page/components/payments-table/consts'

import styles from './index.module.scss'

export const PaymentsTable: FC = () => {
	const { data } = useGetUserByIdQuery('0')
	if (!data?.tableTariffPayments.length) return <h3>Данных о платежах не найдено</h3>
	return (
		<>
			<CustomTable
				className={styles.employeeEventsTable}
				colTitles={tableColTitles}
				cellsData={data.tableTariffPayments}
			/>
		</>
	)
}
