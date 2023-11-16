import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'

import { NotFound } from 'src/pages/not-found/not-found'
import { OrganizerCabinet } from 'src/pages/organizer-cabinet/organizer-cabinet'
import { ProfileLayout } from 'src/modules/profile-layout/profile-layout'
import { OrganizerDocuments } from 'src/pages/organizer-documents/organizer-documents'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
			</Route>
			<Route path={AppRoute.Profile} element={<ProfileLayout />}>
				<Route path={AppRoute.OrganizerCabinet} element={<OrganizerCabinet />} />
				<Route path={AppRoute.OrganizerDocs} element={<OrganizerDocuments />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
