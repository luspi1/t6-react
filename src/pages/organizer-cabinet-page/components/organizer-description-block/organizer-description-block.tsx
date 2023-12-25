import { type FC } from 'react'
import cn from 'classnames'

import { CardInfo } from 'src/components/card-info/card-info'
import { EditPencilSVG } from 'src/UI/icons/editPencilSVG'

import styles from '../../index.module.scss'
import componentStyles from './index.module.scss'

type OrganizerDescriptionBlockProps = {
	eventsDescription?: {
		description: string
		activity: string[]
	}
}

export const OrganizerDescriptionBlock: FC<OrganizerDescriptionBlockProps> = ({
	eventsDescription,
}) => {
	return (
		<CardInfo className={cn(componentStyles.eventsDescription, styles.editableBlock)}>
			<h5>Описание организатора мероприятий</h5>
			<p>{eventsDescription?.description}</p>
			<h6>Деятельность</h6>
			<ul>{eventsDescription?.activity.map((item: string) => <li key={item}>{item}</li>)}</ul>

			<div className={styles.editButton}>
				<EditPencilSVG />
			</div>
		</CardInfo>
	)
}
