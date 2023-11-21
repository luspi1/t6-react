import { ProfileNav } from 'src/components/profile-nav/profile-nav'
import { cabinetNavItems, cabinetPathMap } from 'src/layouts/cabinet-layout/consts'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import styles from './index.module.scss'
import { useLocationMatch } from 'src/hooks/location-match'
import { getCurrentPath } from 'src/helpers/utils'
export const CabinetLayout = () => {
	const matchesLocation = useLocationMatch([`${AppRoute.Profile}/${AppRoute.OrgCabinet}`])
	const { pathname } = useLocation()
	const currentPath = getCurrentPath(pathname)

	if (matchesLocation) return <Navigate to={AppRoute.Cabinet} />
	return (
		<div>
			<div className={styles.cabinetTop}>
				<h2 className={styles.cabinetTitle}>
					Организатор: {cabinetPathMap?.[currentPath as keyof typeof cabinetPathMap]}
				</h2>
				<ProfileNav navItems={cabinetNavItems} />
			</div>
			<div className={styles.cabinetContent}>
				<Outlet />
			</div>
		</div>
	)
}
