import { type FC } from 'react'

import { useGetUserByIdQuery } from 'src/store/user/user.api'

import styles from './index.module.scss'
import { BottomArrowSvg } from 'src/UI/icons/bottomArrowSVG'

export const ProfilePersonal: FC = () => {
	const { data: userData } = useGetUserByIdQuery('0')
	if (!userData) return <button>Войти</button>
	return (
		<div className={styles.profilePersonal}>
			<a className={styles.profileName} href='#'>
				{userData.name}
			</a>
			<img className={styles.profileAvatar} src={userData.avatar} alt={userData.name} />
			<BottomArrowSvg />
		</div>
	)
}
