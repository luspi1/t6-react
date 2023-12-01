export enum AppRoute {
	Home = '/',
	Profile = 'profile',
	Personal = 'personal',
	OrgCabinet = 'profile-org',
	Dashboard = 'dashboard',
	Cabinet = 'cabinet',
	OrganizerDocs = 'docs',
	Statistics = 'statistics',
	Contract = 'contract',
	Tariffs = 'tariffs',
	Employees = 'employees',
	CreateEvent = 'create-event',
	EventsList = 'events-list',
	TypesVisitors = 'types-visitors',
}

export enum NameSpace {
	User = 'USER',
	ProfileSidebar = 'PROFILE_SIDEBAR',
}

export enum ReducerPath {
	User = 'user/api',
}

export const BASE_URL = 'http://localhost:4001/api/v1'

export enum ContractStatus {
	NoContract = 'договор не создан',
	NoContractSigned = 'договор не подписан',
	ContractSigned = 'договор подписан обеими сторонами',

	NoActSigned = 'акт не подписан',
	ActSigned = 'счет оплачен',
}

export enum ContractsInteraction {
	ContractRequest = 'Запросить договор',
	ContractSign = 'Подписать договор',
	ContractTerminate = 'Расторгнуть договор',
	AdditionalAgreement = 'Дополнительное соглашение',
}
