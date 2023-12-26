import { type FC } from 'react'

import { CurrentEvent } from 'src/UI/CurrentEvent/CurrentEvent'
import { CardInfo } from 'src/components/card-info/card-info'
import { MainLink } from 'src/UI/MainLink/MainLink'
import { LinkArrowSVG } from 'src/UI/icons/linkArrowSVG'
import { DownloadSvg } from 'src/UI/icons/downloadSVG'

import styles from './index.module.scss'
import { type Event } from 'src/types/event'
import { useGetAllEventsQuery } from 'src/store/events/events.api'

export const SchedulePage: FC = () => {
	const { data } = useGetAllEventsQuery(null)
	return (
		<>
			<CurrentEvent />
			<div className={styles.scheduleControl}>
				<MainLink href='#'>
					<LinkArrowSVG />
					Перейти к редактированию расписания
				</MainLink>
				<div className={styles.downloadButtons}>
					<MainLink href='#' download>
						<DownloadSvg />
						скачать список в xls
					</MainLink>
					<MainLink href='#' download>
						<DownloadSvg />
						скачать список в pdf
					</MainLink>
				</div>
			</div>

			<CardInfo className={styles.scheduleTable}>
				{data?.map((item: Event) => (
					<li key={item.id} className={styles.scheduleItem}>
						<p className={styles.scheduleItemIndex}>{+item.id + 1}.</p>
						<p className={styles.scheduleItemTitle}>{item.name}</p>
						<p className={styles.scheduleItemLocation}>{item.location}</p>
						<p className={styles.scheduleItemTime}>
							<b>{item.startTime}</b> {item.startDate} — <b>{item.endTime}</b> {item.endDate}
						</p>
					</li>
				))}
			</CardInfo>

			<MainLink href='#'>
				<LinkArrowSVG />
				Перейти к редактированию расписания
			</MainLink>
		</>
	)
}
