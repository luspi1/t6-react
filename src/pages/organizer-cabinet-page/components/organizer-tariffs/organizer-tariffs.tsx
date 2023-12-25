import { type FC } from 'react'

import { CardInfo } from 'src/components/card-info/card-info'
import styles from '../../index.module.scss'
import { type Tariff } from 'src/types/user'

type OrganizerTariffsProps = {
	tariffs?: Tariff[]
}

export const OrganizerTariffs: FC<OrganizerTariffsProps> = ({ tariffs }) => {
	return (
		<CardInfo className={styles.organizerTable}>
			<h4>Тарифы</h4>

			<div className={styles.cardInfoTable}>
				<div className={styles.titleRow}>
					<p className={styles.firstColumn}>Название</p>
					<p className={styles.secondColumn}>Описание</p>
					<p className={styles.thirdColumn}>Стоимость</p>
				</div>

				{tariffs?.slice(0, 2).map((item) => (
					<div className={styles.dataRow} key={item.title}>
						<a className={styles.firstColumn} href='#'>
							{item.title}
						</a>
						<p className={styles.secondColumn}>{item.description}</p>
						<p className={styles.thirdColumn}>{item.cost.toString() + ' ₽ / мес.'}</p>
					</div>
				))}
			</div>
			<a className={styles.tableLink} href='#'>
				Все тарифы
			</a>
		</CardInfo>
	)
}
