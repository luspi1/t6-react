import { type FC } from 'react'
import { useLocationMatch } from 'src/hooks/location-match'
import { type ContentNav } from 'src/types/navProfile'
import { AppRoute } from 'src/helpers/consts'
import { Navigate, Outlet } from 'react-router-dom'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
import { ProfileContent } from 'src/components/profile-content/profile-content'
import { employeesNavItems } from 'src/layouts/employees-layout/consts'
import { OrgStatus } from 'src/modules/org-status/org-status'

export const EmployeesLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AppRoute.Profile}/${AppRoute.OrgEmployees}`,
	])

	if (matchesLocation) return <Navigate to={AppRoute.Employees} />

	return (
		<>
			<ProfileContentHeader mainTitle='Организатор' navItems={employeesNavItems} />
			<ProfileContent>
				<OrgStatus />
				<Outlet />
			</ProfileContent>
		</>
	)
}
