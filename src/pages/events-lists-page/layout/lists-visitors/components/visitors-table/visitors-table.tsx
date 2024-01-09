import React, { type FC } from 'react'

import { useGetEventsListsQuery } from 'src/store/events/events.api'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import {
	AdmissionSelectOptions,
	PaymentSelectOptions,
	TableColTitles,
} from 'src/pages/events-lists-page/layout/lists-visitors/components/visitors-table/consts'

import styles from './index.module.scss'

export const VisitorsTable: FC = () => {
	const { data: eventsListsData } = useGetEventsListsQuery(null)

	if (!eventsListsData?.tableVisitors) return <h2>Посетителей нет</h2>

	return (
		<CustomTable
			className={styles.visitorsTable}
			colTitles={TableColTitles}
			cellsData={eventsListsData.tableVisitors}
			additionalElements={[
				{
					col: 7,
					el: (
						<MainSelect
							className={styles.visitorsSelect}
							name='admission'
							options={AdmissionSelectOptions}
						/>
					),
				},
				{
					col: 8,
					el: (
						<MainSelect
							className={styles.visitorsSelect}
							name='payments'
							options={PaymentSelectOptions}
						/>
					),
				},
			]}
		/>
	)
}
