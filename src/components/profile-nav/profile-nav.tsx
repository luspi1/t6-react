import { type FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'
import { type NavProfileItem } from 'src/modules/profile-content-header/types'

type ProfileNavProps = {
	navItems: NavProfileItem[]
}

export const ProfileNav: FC<ProfileNavProps> = ({ navItems }) => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.profileLink} active-profile-link` : `${styles.profileLink}`
	return (
		<ul className={styles.profileNav}>
			{navItems?.map((item, idx) => (
				<li key={item.title}>
					<NavLink className={setActive} to={item.link} state={{ linkIdx: idx }}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
