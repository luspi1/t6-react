import { type FC, useState } from 'react'
import cn from 'classnames'

import { type CabinetInfo } from 'src/types/user'

import { CardInfo } from 'src/components/card-info/card-info'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { EditPencilSVG } from 'src/UI/icons/editPencilSVG'
import { GreenConfirmSVG } from 'src/UI/icons/greenConfirmSVG'

import styles from '../../index.module.scss'
import componentStyles from './index.module.scss'

type OrganizerContactsBlockProps = {
	cabinetInfo?: CabinetInfo
}
export const OrganizerContactsBlock: FC<OrganizerContactsBlockProps> = ({ cabinetInfo }) => {
	const [isPasswordShown, setPasswordShown] = useState<boolean>(false)

	return (
		<CardInfo className={cn(styles.cardInfo, styles.editableBlock)}>
			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>E-mail / Логин</p>
				<p className={cn(styles.cabinetInfoValue, componentStyles.email)}>{cabinetInfo?.email}</p>
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

				<MainButton
					className={cn(styles.cabinetInfoValue, componentStyles.hidePassword)}
					onClick={() => setPasswordShown(!isPasswordShown)}
					as='button'
				>
					{!isPasswordShown ? 'Показать пароль' : 'Скрыть пароль'}
				</MainButton>
			</div>

			<div className={styles.cabinetInfoItem}>
				<p className={styles.cabinetInfoTitle}>Номер телефона</p>
				<p className={styles.cabinetInfoValue}>{cabinetInfo?.phone}</p>
			</div>

			{cabinetInfo?.authenticationSecondFactor ? (
				<div className={cn(styles.cabinetInfoItem, componentStyles.authFactor)}>
					<GreenConfirmSVG />
					Второй фактор аутентификации включен
				</div>
			) : null}

			<MainButton className={styles.editButton} as='link'>
				<EditPencilSVG />
			</MainButton>
		</CardInfo>
	)
}
