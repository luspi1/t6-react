import { cabinetNavItems } from 'src/layouts/cabinet-layout/consts'
import { Navigate, Outlet } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { useLocationMatch } from 'src/hooks/location-match'
import { ProfileContent } from 'src/components/profile-content/profile-content'
import { type ContentNav } from 'src/types/navProfile'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
export const CabinetLayout = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AppRoute.Profile}/${AppRoute.OrgCabinet}`,
	])

	if (matchesLocation) return <Navigate to={AppRoute.Cabinet} />

	return (
		<>
			<ProfileContentHeader mainTitle='Организатор' navItems={cabinetNavItems} />
			<ProfileContent>
				<Outlet />
			</ProfileContent>
		</>
	)
}
