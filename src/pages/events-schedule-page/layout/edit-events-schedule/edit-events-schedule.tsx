import { type FC, useState, useEffect } from 'react'

import { SchedulePoint } from './components/schedule-point'
// import { useGetAllEventsQuery } from 'src/store/events/events.api'
import { AddListPointSvg } from 'src/UI/icons/addListPointSVG'
import { BigFormButtons } from 'src/components/big-form-buttons/big-form-buttons'
import { type Event } from 'src/types/event'
import styles from './index.module.scss'

export const EditEventsSchedule: FC = () => {
	// const { data } = useGetAllEventsQuery(null)


	const [eventsData, setEventsData] = useState<[] | Event[]>([])

	useEffect(() => {
		data && setEventsData(data.schedule)
	}, [data])

	const handleDeletingPoint = (id: string) => {
		setEventsData((state) => state?.filter((item) => item.id !== id))
	}

	const handleAddingPoint = () => {
		setEventsData((state) => [...state, { id: eventsData?.length.toString() }])
	}

	return (
		<div>
			<ul className={styles.scheduleList}>
				{eventsData?.map((item) => (
					<li key={item.id}>
						<SchedulePoint
							schedulePointData={item}
							deleteSchedulePoint={(id: string) => handleDeletingPoint(id)}
						/>
					</li>
				))}
			</ul>

			<button className={styles.addPointButton} onClick={handleAddingPoint}>
				<AddListPointSvg />
				Добавить еще пункт расписания
			</button>

			<BigFormButtons />
		</div>
	)
}
