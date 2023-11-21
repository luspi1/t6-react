import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/layouts/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'

import { NotFound } from 'src/pages/not-found/not-found'
import { OrganizerCabinet } from 'src/pages/organizer-cabinet/organizer-cabinet'
import { ProfileLayout } from 'src/layouts/profile-layout/profile-layout'
import { StatisticsPage } from 'src/pages/statistics-page/statistics-page'
import { CabinetLayout } from 'src/layouts/cabinet-layout/cabinet-layout'
import { OrganizerDocuments } from 'src/pages/organizer-documents/organizer-documents'
import { PersonalPage } from 'src/pages/personal-page/personal-page'
import { ContractPage } from 'src/pages/contract-page/contract-page'
import { TariffsPage } from 'src/pages/tariffs-page/tariffs-page'
import { EmployeesPage } from 'src/pages/employees-page/employees-page'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
			</Route>
			<Route path={AppRoute.Profile} element={<ProfileLayout />}>
				<Route path={AppRoute.OrgCabinet} element={<CabinetLayout />}>
					<Route path={AppRoute.Cabinet} element={<OrganizerCabinet />} />
					<Route path={AppRoute.Personal} element={<PersonalPage />} />
					<Route path={AppRoute.OrganizerDocs} element={<OrganizerDocuments />} />
					<Route path={AppRoute.Contract} element={<ContractPage />} />
					<Route path={AppRoute.Tariffs} element={<TariffsPage />} />
				</Route>
				<Route path={AppRoute.Statistics} element={<StatisticsPage />} />
				<Route path={AppRoute.Employees} element={<EmployeesPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
