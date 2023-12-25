import { type FC } from 'react'

import { CardInfo } from 'src/components/card-info/card-info'
import { type EventsStatistic } from 'src/types/user'
import styles from './index.module.scss'
import { formatToCurrencyWithSymbol } from 'src/helpers/utils'

type OrganizerStatisticProps = {
	eventsStatistic?: EventsStatistic
}

export const OrganizerStatistic: FC<OrganizerStatisticProps> = ({ eventsStatistic }) => {
	return (
		<CardInfo className={styles.statistic}>
			<h4>Статистика</h4>

			<div className={styles.statisticItem}>
				<h6>Мероприятия</h6>
				<div>
					<p>
						Создал<span>{eventsStatistic?.createdEventsCount}</span>
					</p>

					<p>
						Провел<span>{eventsStatistic?.heldEventsCount}</span>
					</p>
					<p>
						Сейчас<span>{eventsStatistic?.currentEventsCount}</span>
					</p>
					<p>
						Отменено<span>{eventsStatistic?.cancelledEventsCount}</span>
					</p>
				</div>
			</div>

			<div className={styles.statisticItem}>
				<h6>Посетители</h6>
				<div>
					<p>
						Всего<span>{eventsStatistic?.totalVisitors}</span>
					</p>

					<p>
						Платных<span>{eventsStatistic?.paidVisitors}</span>
					</p>
				</div>
			</div>

			{eventsStatistic?.earnings && (
				<div className={styles.statisticItem}>
					<h6>Заработано</h6>
					<p>
						Всего<span>{formatToCurrencyWithSymbol(eventsStatistic.earnings)}</span>
					</p>
				</div>
			)}
		</CardInfo>
	)
}
