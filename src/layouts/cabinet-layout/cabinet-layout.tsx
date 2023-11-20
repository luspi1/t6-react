import { ProfileNav } from 'src/components/profile-nav/profile-nav'
import { cabinetNavItems } from 'src/layouts/cabinet-layout/consts'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

export const CabinetLayout = () => {
	const { pathname } = useLocation()
	if (pathname === `/${AppRoute.Profile}/${AppRoute.OrgCabinet}`)
		return <Navigate to={AppRoute.Cabinet} />
	return (
		<div>
			<ProfileNav navItems={cabinetNavItems} />
			<Outlet />
		</div>
	)
}
