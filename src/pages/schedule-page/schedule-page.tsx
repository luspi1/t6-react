import { type FC } from 'react'

import { SectionTitle } from 'src/components/section-title/section-title'
import { MainButton } from 'src/UI/MainButton/MainButton'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { LinkArrowSVG } from 'src/UI/icons/linkArrowSVG'
import { DownloadSvg } from 'src/UI/icons/downloadSVG'

import styles from './index.module.scss'
import { useGetAllEventsQuery } from 'src/store/events/events.api'

export const SchedulePage: FC = () => {
	const { data } = useGetAllEventsQuery(null)
	return (
		<>
			<SectionTitle />
			<div className={styles.scheduleControl}>
				<MainButton href='#' as='link'>
					<LinkArrowSVG />
					Перейти к редактированию расписания
				</MainButton>
				<div className={styles.downloadButtons}>
					<MainButton href='#' download as='link'>
						<DownloadSvg />
						скачать список в xls
					</MainButton>
					<MainButton href='#' download as='link'>
						<DownloadSvg />
						скачать список в pdf
					</MainButton>
				</div>
			</div>

			{data && (
				<CustomTable
					className={styles.eventsScheduleTable}
					cellsData={data.tableSchedule}
					additionalElements={[
						{
							col: 5,
							el: '—',
						},
					]}
				/>
			)}

			<MainButton href='#' as='link'>
				<LinkArrowSVG />
				Перейти к редактированию расписания
			</MainButton>
		</>
	)
}
