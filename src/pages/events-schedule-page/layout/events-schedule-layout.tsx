import { SectionTitle } from 'src/components/section-title/section-title'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { LinkArrowSVG } from 'src/UI/icons/linkArrowSVG'
import { DownloadSvg } from 'src/UI/icons/downloadSVG'
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom'

import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/helpers/consts'
import { type ContentNav } from 'src/types/navProfile'

import styles from './index.module.scss'

export const EventsScheduleLayout = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AppRoute.Profile}/${AppRoute.Events}/${AppRoute.Schedule}`,
	])

	if (matchesLocation) return <Navigate to={AppRoute.EventsSchedule} />

	const location = useLocation()

	return (
		<>
			{location.pathname.includes('/edit-events-schedule') ? (
				<>
					<SectionTitle requiredinputs />
					<div className={styles.scheduleControl}>
						<Link to={AppRoute.EventsSchedule} className={styles.editScheduleLink}>
							<LinkArrowSVG />
							Перейти к просмотру расписания
						</Link>
					</div>
				</>
			) : (
				<>
					<SectionTitle />
					<div className={styles.scheduleControl}>
						<Link to={AppRoute.EditEventsSchedule} className={styles.editScheduleLink}>
							<LinkArrowSVG />
							Перейти к редактированию расписания
						</Link>

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
				</>
			)}

			<Outlet />

			{location.pathname.includes('/edit-events-schedule') ? (
				<Link to={AppRoute.EventsSchedule} className={styles.editScheduleLink}>
					<LinkArrowSVG />
					Перейти к просмотру расписания
				</Link>
			) : (
				<Link to={AppRoute.EditEventsSchedule} className={styles.editScheduleLink}>
					<LinkArrowSVG />
					Перейти к редактированию расписания
				</Link>
			)}
		</>
	)
}
