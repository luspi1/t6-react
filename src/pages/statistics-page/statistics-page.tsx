import { type FC } from 'react'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
import { ProfileContent } from 'src/components/profile-content/profile-content'

import styles from './index.module.scss'
import { OrgStatus } from 'src/modules/org-status/org-status'
import { StatTable } from 'src/pages/statistics-page/components/stat-table/stat-table'
import { stat } from 'src/pages/statistics-page/consts'
import { useGetUserByIdQuery } from 'src/store/user/user.api'
import { RoundChart } from 'src/components/round-chart/round-chart'
export const StatisticsPage: FC = () => {
	const { data, isError } = useGetUserByIdQuery('0')
	return (
		<div>
			<ProfileContentHeader mainTitle='Организатор' navItems='статистика' />
			<ProfileContent>
				<OrgStatus />
				<div className={styles.statisticsPageContent}>
					<div className={styles.statisticsPageLeft}>
						{isError || !data?.orgStatistics ? (
							<h2>Статистика не найдена</h2>
						) : (
							<>
								<StatTable {...stat.events} tableData={data.orgStatistics.events} />
								<StatTable {...stat.visits} tableData={data.orgStatistics.visits} />
								<StatTable
									{...stat.fundraisers}
									tableData={data.orgStatistics.fundraisers}
									isCurrency={true}
								/>
							</>
						)}
					</div>
					<div className={styles.statisticsPageRight}>
						<RoundChart
							title='Мероприятия по месяцам'
							percentData={data?.orgStatistics.percentEvents ?? 0}
						/>
						<RoundChart
							title='Мероприятия по месяцам'
							percentData={data?.orgStatistics.percentEvents ?? 0}
						/>
					</div>
				</div>
			</ProfileContent>
		</div>
	)
}
