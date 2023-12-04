import { type FC } from 'react'

import styles from './index.module.scss'
import avatarStub from 'src/assets/img/avatar-stub.png'

type EmployeeInfoProps = {
	avatar?: string
}
export const EmployeeInfo: FC<EmployeeInfoProps> = ({ avatar }) => {
	return (
		<div className={styles.employeeInfo}>
			<div className={styles.employeeAvatar}>
				<img src={avatar ?? avatarStub} alt='avatar' />
			</div>
		</div>
	)
}
