import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import { SectionTitle } from 'src/components/section-title/section-title'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { LinkArrowSVG } from 'src/UI/icons/linkArrowSVG'
import { DownloadSvg } from 'src/UI/icons/downloadSVG'
import { MainButton } from 'src/UI/MainButton/MainButton'

import styles from './index.module.scss'
import { useGetAllEventsQuery } from 'src/store/events/events.api'
import { AppRoute } from 'src/helpers/consts'

export const SchedulePage: FC = () => {
	console.log(AppRoute)
	const { data } = useGetAllEventsQuery(null)
	return (
		<div style={{ border: '2px solid red' }}>
			<SectionTitle />
			<div className={styles.scheduleControl}>
				<NavLink to={AppRoute.EditEventsSchedule} className={styles.editScheduleLink}>
					<LinkArrowSVG />
					Перейти к редактированию расписания
				</NavLink>

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
		</div>
	)
}
