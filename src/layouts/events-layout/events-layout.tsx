import { type FC } from 'react'
import { useLocationMatch } from 'src/hooks/location-match'
import { type ContentNav } from 'src/types/navProfile'
import { AppRoute } from 'src/helpers/consts'
import { Navigate, Outlet } from 'react-router-dom'
import { ProfileContentHeader } from 'src/modules/profile-content-header/profile-content-header'
import { ProfileContent } from 'src/components/profile-content/profile-content'
import { eventsNavItems } from 'src/layouts/events-layout/consts'

export const EventsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Profile}/${AppRoute.Events}`])

	if (matchesLocation) return <Navigate to={AppRoute.EventsLists} />

	return (
		<>
			<ProfileContentHeader navItems={eventsNavItems} activeIdx={6} />
			<ProfileContent>
				<Outlet />
			</ProfileContent>
		</>
	)
}
