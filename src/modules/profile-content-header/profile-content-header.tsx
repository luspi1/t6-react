import { type FC } from 'react'
import { ProfileNav } from 'src/components/profile-nav/profile-nav'
import { useLocation } from 'react-router-dom'

import styles from './index.module.scss'
import { type NavProfileItem } from 'src/modules/profile-content-header/types'

type ProfileContentHeaderProps = {
	mainTitle?: string
	navItems: NavProfileItem[] | string
	activeIdx?: number
}
export const ProfileContentHeader: FC<ProfileContentHeaderProps> = ({
	mainTitle,
	navItems,
	activeIdx,
}) => {
	const location = useLocation()

	return (
		<div className={styles.cabinetTop}>
			{Array.isArray(navItems) ? (
				<>
					<h2 className={styles.cabinetTitle}>
						{mainTitle && `${mainTitle}:`}{' '}
						{navItems[location?.state?.linkIdx]?.title ?? navItems[activeIdx ?? 0]?.title}
					</h2>
					<ProfileNav navItems={navItems} />
				</>
			) : (
				<h2 className={styles.cabinetTitle}>
					{mainTitle}: {navItems}
				</h2>
			)}
		</div>
	)
}
