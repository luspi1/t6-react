import { type FC } from 'react'
import { type UserOrgStatistics } from 'src/types/user'
import { RoundChart } from 'src/components/round-chart/round-chart'

import styles from './index.module.scss'

type StatChartsProps = {
	orgStat?: UserOrgStatistics
}
export const StatCharts: FC<StatChartsProps> = ({ orgStat }) => {
	return (
		<div className={styles.statCharts}>
			<RoundChart title='Мероприятия по месяцам' percentData={orgStat?.percentEvents ?? 0} />
			<RoundChart title='Мероприятия по месяцам' percentData={orgStat?.percentEvents ?? 0} />
		</div>
	)
}
