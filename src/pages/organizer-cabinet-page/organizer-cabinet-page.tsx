import { type FC } from 'react'

import styles from './index.module.scss'
import { CardInfo } from 'src/UI/CardInfo/CardInfo'
export const OrganizerCabinetPage: FC = () => {
	return (
		<div className={styles.cabinetPage}>
			<p className={styles.cabinetDesc}>
				Это — внутренняя версия профиля организатора. В публичном доступе Ваша страница{' '}
				<a href='#'>выглядит так.</a>
			</p>
			<div className={styles.cabinetContent}>
				<div className={styles.cabinetLeft}>
					<CardInfo>
						<h5>Коммерческий организатор</h5>
					</CardInfo>
				</div>
				<div className={styles.cabinetLRight}></div>
			</div>
		</div>
	)
}
