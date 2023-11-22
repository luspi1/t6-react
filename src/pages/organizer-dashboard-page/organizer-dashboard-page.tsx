import { type FC } from 'react'

import styles from './index.module.scss'
import { CardInfo } from 'src/UI/CardInfo/CardInfo'
export const OrganizerDashboardPage: FC = () => {
	return (
		<div className={styles.dashboardPage}>
			<p className={styles.dashboardDesc}>
				Это — внутренняя версия профиля организатора. В публичном доступе Ваша страница{' '}
				<a href='#'>выглядит так.</a>
			</p>
			<div className={styles.dashboardContent}>
				<div className={styles.dashboardLeft}>
					<CardInfo>
						<h5>Коммерческий организатор</h5>
					</CardInfo>
				</div>
				<div className={styles.dashboardLRight}></div>
			</div>
		</div>
	)
}
