import { type FC } from 'react'

import { CustomTable } from 'src/components/custom-table/custom-table'
import styles from './index.module.scss'
import { useGetAllEventsQuery } from 'src/store/events/events.api'

export const EventsSchedule: FC = () => {
	const { data } = useGetAllEventsQuery(null)
	return (
		<div className={styles.schedulePage}>
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
		</div>
	)
}
