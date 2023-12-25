import { type FC, useState } from 'react'
import cn from 'classnames'

import { type CabinetInfo } from 'src/types/user'

import { CardInfo } from 'src/components/card-info/card-info'
import { EditPencilSVG } from 'src/UI/icons/editPencilSVG'
import { GreenConfirmSVG } from 'src/UI/icons/greenConfirmSVG'

import styles from '../../index.module.scss'
import componentBlock from './index.module.scss'

type OrganizerContactsBlockProps = {
	cabinetInfo?: CabinetInfo
}
export const OrganizerContactsBlock: FC<OrganizerContactsBlockProps> = ({ cabinetInfo }) => {
	const [isPasswordShown, setPasswordShown] = useState(false)

	return (
		<CardInfo className={cn(styles.cardInfo, styles.editableBlock)}>
			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>E-mail / Логин</p>
				<p className={cn(styles.cabinetInfoValue, componentBlock.email)}>{cabinetInfo?.email}</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Пароль</p>
				<div className={styles.cabinetInfoValue}>
					{!isPasswordShown ? (
						<p className={styles.cabinetInfoValue}>*****************</p>
					) : (
						<p className={styles.cabinetInfoValue}>{cabinetInfo?.password}</p>
					)}
				</div>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>
					{' '}
					{!isPasswordShown ? 'Пароль скрыт' : 'Пароль открыт'}
				</p>

				<p
					className={cn(styles.cabinetInfoValue, componentBlock.hidePassword)}
					onClick={() => setPasswordShown(!isPasswordShown)}
				>
					{!isPasswordShown ? 'Показать пароль' : 'Скрыть пароль'}
				</p>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Номер телефона</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.phone}</p>
			</div>

			{cabinetInfo?.authenticationSecondFactor ? (
				<div className={cn(styles.cabinetInfoItem, componentBlock.authFactor)}>
					<GreenConfirmSVG />
					Второй фактор аутентификации включен
				</div>
			) : null}

			<div className={styles.editButton}>
				<EditPencilSVG />
			</div>
		</CardInfo>
	)
}
