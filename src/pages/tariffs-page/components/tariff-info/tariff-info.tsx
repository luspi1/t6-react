import { type FC } from 'react'
import cn from 'classnames'

import { MainButton } from 'src/UI/MainButton/MainButton'
import styles from './index.module.scss'
import { type Tariff } from 'src/types/user'
import { formatToCurrencyWithSymbol } from 'src/helpers/utils'

type TariffInfoProps = {
	currentTariffInfo?: Tariff
}

export const TariffInfo: FC<TariffInfoProps> = ({ currentTariffInfo }) => {
	return (
		currentTariffInfo && (
			<div className={styles.tafiffInfoContainer}>
				<div className={styles.tariffInfoBlock}>
					<div className={styles.tariffInfoBlockItem}>
						<h5 className={styles.tariffInfoTitle}>Тариф {currentTariffInfo.title}</h5>
						<div className={styles.tariffInfoCost}>
							<p>{formatToCurrencyWithSymbol(currentTariffInfo.cost)}</p> <span>в год</span>
						</div>

						<div className={styles.tariffInfoPeriod}>
							<p>Действует на период</p>
							<p className={styles.tariffInfoPeriodAvailable}>
								{currentTariffInfo.startPeriod} — {currentTariffInfo.endPeriod}
							</p>

							<MainButton className={styles.tariffInfoLink} as='link' href='#'>
								Продлить обслуживание
							</MainButton>
						</div>
					</div>

					<div className={cn(styles.tariffInfoBlockItem, styles.tariffInfoParams)}>
						<h6>Параметры тарифа</h6>
						<ul>{currentTariffInfo.params?.map((item: string) => <li key={item}>{item}</li>)}</ul>

						<MainButton className={styles.tariffInfoLink} as='link' href='#'>
							Сменить тариф
						</MainButton>
					</div>
				</div>
			</div>
		)
	)
}
