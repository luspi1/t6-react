import { type FC } from 'react'
import { NavLink } from 'react-router-dom'
import { type NavProfileItem } from 'src/types/navProfile'

import styles from './index.module.scss'

type ProfileNavProps = {
	navItems: NavProfileItem[]
}
export const ProfileNav: FC<ProfileNavProps> = ({ navItems }) => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.profileLink} active-profile-link` : `${styles.profileLink}`
	return (
		<ul className={styles.profileNav}>
			{navItems?.map((item) => (
				<li key={item.title}>
					<NavLink className={setActive} to={item.link}>
						{item.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
