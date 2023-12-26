import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/layouts/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'

import { NotFound } from 'src/pages/not-found/not-found'
import { ProfileLayout } from 'src/layouts/profile-layout/profile-layout'
import { StatisticsPage } from 'src/pages/statistics-page/statistics-page'
import { CabinetLayout } from 'src/layouts/cabinet-layout/cabinet-layout'
import { OrganizerDocumentsPage } from 'src/pages/organizer-documents-page/organizer-documents-page'
import { PersonalPage } from 'src/pages/personal-page/personal-page'
import { ContractPage } from 'src/pages/contract-page/contract-page'
import { TariffsPage } from 'src/pages/tariffs-page/tariffs-page'
import { EmployeesPage } from 'src/pages/employees-page/employees-page'
import { EventsListsPage } from 'src/pages/events-lists-page/events-lists-page'
import { CreateEventPage } from 'src/pages/create-event-page/create-event-page'
import { TypesVisitorsPage } from 'src/pages/types-visitors-page/types-visitors-page'
import { OrganizerCabinetPage } from 'src/pages/organizer-cabinet-page/organizer-cabinet-page'
import { EmployeesLayout } from 'src/layouts/employees-layout/employees-layout'
import { OneEmployeePage } from 'src/pages/one-employee-page/one-employee-page'
import { WorkforcePage } from 'src/pages/workforce-page/workforce-page'
import { EventsLayout } from 'src/layouts/events-layout/events-layout'
import { EventsProfilePage } from 'src/pages/events-profile-page/events-profile-page'
import { EventsRegistrationPage } from 'src/pages/events-registration-page/events-registration-page'
import { EventsTicketsPage } from 'src/pages/events-tickets-page/events-tickets-page'
import { EventsContentPage } from 'src/pages/events-content-page/events-content-page'
import { EventsLocationPage } from 'src/pages/events-location-page/events-location-page'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
			</Route>
			<Route path={AppRoute.Profile} element={<ProfileLayout />}>
				<Route path={AppRoute.OrgCabinet} element={<CabinetLayout />}>
					<Route path={AppRoute.Cabinet} element={<OrganizerCabinetPage />} />
					<Route path={AppRoute.Personal} element={<PersonalPage />} />
					<Route path={AppRoute.OrganizerDocs} element={<OrganizerDocumentsPage />} />
					<Route path={AppRoute.Contract} element={<ContractPage />} />
					<Route path={AppRoute.Tariffs} element={<TariffsPage />} />
				</Route>
				<Route path={AppRoute.Statistics} element={<StatisticsPage />} />
				<Route path={AppRoute.OrgEmployees} element={<EmployeesLayout />}>
					<Route path={AppRoute.Employees} element={<EmployeesPage />} />
					<Route path={AppRoute.OneEmployee} element={<OneEmployeePage />} />
					<Route path={AppRoute.Workforce} element={<WorkforcePage />} />
				</Route>

				<Route path={AppRoute.CreateEvent} element={<CreateEventPage />} />
				<Route path={AppRoute.Events} element={<EventsLayout />}>
					<Route path={AppRoute.EventsProfile} element={<EventsProfilePage />} />
					<Route path={AppRoute.EventsRegistration} element={<EventsRegistrationPage />} />
					<Route path={AppRoute.EventsTickets} element={<EventsTicketsPage />} />
					<Route path={AppRoute.EventsContent} element={<EventsContentPage />} />
					<Route path={AppRoute.EventsLocation} element={<EventsLocationPage />} />
					<Route path={AppRoute.EventsLists} element={<EventsListsPage />} />
				</Route>

				<Route path={AppRoute.TypesVisitors} element={<TypesVisitorsPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
