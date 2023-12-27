import { type FC } from 'react'
import cn from 'classnames'

import styles from '../../index.module.scss'
import { type CabinetInfo } from 'src/types/user'

import { CardInfo } from 'src/components/card-info/card-info'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { CopyTextButton } from 'src/components/copy-text-button/copy-text-button'
import { EditPencilSVG } from 'src/UI/icons/editPencilSVG'

type OrganizerTitleBlockProps = {
	cabinetInfo?: CabinetInfo
}
export const OrganizerTitleBlock: FC<OrganizerTitleBlockProps> = ({ cabinetInfo }) => {
	return (
		<CardInfo className={cn(styles.cardInfo, styles.editableBlock)}>
			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Краткое название</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.shortOrganizationName}</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Полное название</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.fullOrganizationName}</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Торговая марка:</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.brandName}</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Регион и город</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.region}</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Интернет-сайт</p>
				<p className={styles.cabinetInfoValue}>
					{cabinetInfo?.site && (
						<>
							<a href={cabinetInfo.site}>{cabinetInfo.site}</a>
							<CopyTextButton copyText={cabinetInfo.site} />
						</>
					)}
				</p>
			</div>

			<MainButton className={styles.editButton} as='link'>
				<EditPencilSVG />
			</MainButton>
		</CardInfo>
	)
}
