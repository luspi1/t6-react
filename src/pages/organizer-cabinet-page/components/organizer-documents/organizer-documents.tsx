import { type FC } from 'react'

import { CardInfo } from 'src/components/card-info/card-info'
import styles from '../../index.module.scss'
import { type Document } from 'src/types/user'

type OrganizerDocumentsProps = {
	documents?: Document[]
}

export const OrganizerDocuments: FC<OrganizerDocumentsProps> = ({ documents }) => {
	return (
		<CardInfo>
			<h4>Документы</h4>

			<div className={styles.cardInfoTable}>
				<div className={styles.titleRow}>
					<p className={styles.firstColumn}>Тип</p>
					<p className={styles.secondColumn}>Название</p>
					<p className={styles.thirdColumn}>Добавлен</p>
				</div>

				{documents?.slice(0, 2).map((item) => (
					<div className={styles.dataRow} key={item.title}>
						<p className={styles.firstColumn}>{item.type}</p>
						<a className={styles.secondColumn} href='#'>
							{item.title}
						</a>
						<p className={styles.thirdColumn}>{item.date}</p>
					</div>
				))}
			</div>

			<a className={styles.tableLink} href='#'>
				Все документы
			</a>
		</CardInfo>
	)
}
