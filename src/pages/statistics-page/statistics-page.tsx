import { type FC } from 'react'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
import { ProfileContent } from 'src/components/profile-content/profile-content'

import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { OrgStatus } from 'src/modules/org-status/org-status'
import { StatTables } from 'src/pages/statistics-page/components/stat-tables/stat-tables'
import { StatCharts } from 'src/pages/statistics-page/components/stat-charts/stat-charts'

import styles from './index.module.scss'
export const StatisticsPage: FC = () => {
	const { data, isError } = useGetUserByIdQuery('0')
	return (
		<div>
			<ProfileContentHeader mainTitle='Организатор' navItems='статистика' />
			<ProfileContent>
				<OrgStatus />
				<div className={styles.statisticsPageContent}>
					<StatTables isError={isError} orgStat={data?.orgStatistics} />
					<StatCharts orgStat={data?.orgStatistics} />
				</div>
			</ProfileContent>
		</div>
	)
}
