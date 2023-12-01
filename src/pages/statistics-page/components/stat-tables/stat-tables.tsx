import { type FC } from 'react'
import styles from './index.module.scss'
import { StatTable } from 'src/components/stat-table/stat-table'
import { stat } from 'src/pages/statistics-page/consts'
import { type UserOrgStatistics } from 'src/types/user'

type StatTablesProps = {
	orgStat?: UserOrgStatistics
	isError: boolean
}
export const StatTables: FC<StatTablesProps> = ({ orgStat, isError }) => {
	return (
		<div className={styles.statisticsTables}>
			{isError || !orgStat ? (
				<h2>Статистика не найдена</h2>
			) : (
				<>
					<StatTable {...stat.events} tableData={orgStat.events} />
					<StatTable {...stat.visits} tableData={orgStat.visits} />
					<StatTable {...stat.fundraisers} tableData={orgStat.fundraisers} isCurrency={true} />
				</>
			)}
		</div>
	)
}
