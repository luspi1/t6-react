import { type FC } from 'react'

import styles from './index.module.scss'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import { GreenConfirmSVG } from 'src/UI/icons/greenConfirmSVG'

type AccountActivityProps = {
	isActive: boolean
}
export const AccountActivity: FC<AccountActivityProps> = ({ isActive }) => {
	return isActive ? (
		<p className={styles.isActiveAcc}>
			<GreenConfirmSVG />
			Учетная запись активна
		</p>
	) : (
		<p className={styles.isNotActiveAcc}>
			<DeleteSVG />
			Учетная запись не активна
		</p>
	)
}
