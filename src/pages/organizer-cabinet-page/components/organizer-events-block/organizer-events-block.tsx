import { type FC } from 'react'

import { CardInfo } from 'src/components/card-info/card-info'
import styles from '../../index.module.scss'
import { type EventsStatistic } from 'src/types/user'

type OrganizerEventsBlockProps = {
	eventsStatistic?: EventsStatistic
}

export const OrganizerEventsBlock: FC<OrganizerEventsBlockProps> = ({ eventsStatistic }) => {
	return (
		<CardInfo className={styles.createdEvents}>
			{eventsStatistic?.createdEventsCount === 25 ? (
				<p className={styles.noCreatedEvents}>Вы еще не создали ни одного мероприятия</p>
			) : (
				''
			)}
		</CardInfo>
	)
}
