export enum AppRoute {
	Home = '/',
	Profile = 'profile',
	Personal = 'personal',
	OrgCabinet = 'profile-org',
	OrgEmployees = 'employees-org',
	Employees = 'employees',
	OneEmployee = 'one-employee',
	Workforce = 'workforce',
	Dashboard = 'dashboard',
	Cabinet = 'cabinet',
	OrganizerDocs = 'docs',
	Statistics = 'statistics',
	Contract = 'contract',
	Tariffs = 'tariffs',
	CreateEvent = 'create-event',
	EventsList = 'events-list',
	TypesVisitors = 'types-visitors',
}

export enum NameSpace {
	User = 'USER',
	ProfileSidebar = 'PROFILE_SIDEBAR',
	Modals = 'MODALS',
}

export enum ReducerPath {
	User = 'user/api',
}

export const BASE_URL = 'http://localhost:4001/api/v1'

export enum DocStatus {
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

export enum ContractsListType {
	Contracts,
	Payments,
}

export enum FileTypes {
	Word = 'doc',
	Pdf = 'pdf',
}
