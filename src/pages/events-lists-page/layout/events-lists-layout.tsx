import { SectionTitle } from 'src/components/section-title/section-title'
import { Navigate, Outlet } from 'react-router-dom'
import { EventsListsNav } from 'src/pages/events-lists-page/components/events-lists-nav/events-lists-nav'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/helpers/consts'
import { type ContentNav } from 'src/types/navProfile'

export const EventsListsLayout = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AppRoute.Profile}/${AppRoute.Events}/${AppRoute.EventsLists}`,
	])

	if (matchesLocation) return <Navigate to={AppRoute.EventsListsVisitors} />

	return (
		<div>
			<SectionTitle />
			<EventsListsNav />
			<Outlet />
		</div>
	)
}
