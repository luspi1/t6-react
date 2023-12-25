import { type FC } from 'react'

import styles from './index.module.scss'
import { useGetUserByIdQuery } from 'src/store/user/user.api'

import { CardInfo } from 'src/components/card-info/card-info'
import { OrgStatus } from 'src/modules/org-status/org-status'
import { Dropzone } from 'src/components/drop-zone/drop-zone'

import { OrganizerTitleBlock } from './components/organizer-title-block/organizer-title-block'
import { OrganizerContactsBlock } from './components/organizer-contacts-block/organizer-contacts-block'
import { OrganizerDescriptionBlock } from './components/organizer-description-block/organizer-description-block'
import { OrganizerEventsBlock } from './components/organizer-events-block/organizer-events-block'
import { OrganizerStatistic } from './components/organizer-statistic/organizer-statistic'
import { OrganizerTariffs } from './components/organizer-tariffs/organizer-tariffs'
import { OrganizerDocuments } from './components/organizer-documents/organizer-documents'

export const OrganizerCabinetPage: FC = () => {
	const { data } = useGetUserByIdQuery('0')
	return (
		<div className={styles.cabinetPage}>
			<p className={styles.cabinetDesc}>
				Это — внутренняя версия профиля организатора. В публичном доступе Ваша страница{' '}
				<a href='#'>выглядит так.</a>
			</p>
			<div className={styles.cabinetContent}>
				<div className={styles.cabinetLeft}>
					<CardInfo className={styles.cardInfo}>
						<OrgStatus className={styles.organizerStatus} />
						<Dropzone />
					</CardInfo>
					<OrganizerEventsBlock eventsStatistic={data?.eventsStatistic} />
					<OrganizerStatistic eventsStatistic={data?.eventsStatistic} />
					<OrganizerTariffs tariffs={data?.tariffs} />
					<OrganizerDocuments documents={data?.documents} />
				</div>

				<div className={styles.cabinetRight}>
					<OrganizerTitleBlock cabinetInfo={data?.cabinetInfo} />
					<OrganizerContactsBlock cabinetInfo={data?.cabinetInfo} />
					<OrganizerDescriptionBlock eventsDescription={data?.eventsDescription} />
				</div>
			</div>
		</div>
	)
}
