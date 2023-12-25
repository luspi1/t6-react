import { type DocPact } from 'src/types/docs'

export type UserOrgStatistics = {
	events: number[]
	visits: number[]
	fundraisers: number[]
	percentEvents: number
}

export type TableData = string[][]

export type EmployeeEventItem = {
	id: string
	relevance: string
	position: string
	title: string
	dates: string
}

export type EmployeeItem = {
	id: string
	typeEmployee: 'постоянный' | 'временный'
	accountActivity: boolean
	isActiveEmployee: boolean
	position: 'вратарь' | 'музыкант' | 'помощник'
	secondName: string
	name: string
	patronymicName: string
	alias: string
	dateEmployment: string
	email: string
	mobileNumber: string
	avatar: string
	typeAcc: string
	tableEvents: TableData
	events: EmployeeEventItem[]
}

export type CabinetInfo = {
	shortOrganizationName: string
	fullOrganizationName: string
	brandName: string
	region: string
	site: string
	email: string
	password: string
	phone: string
	authenticationSecondFactor: true
}

export type EventsStatistic = {
	createdEventsCount: number
	heldEventsCount: number
	currentEventsCount: number
	cancelledEventsCount: number
	totalVisitors: number
	paidVisitors: number
	earnings: number
}

export type Tariff = {
	title: string
	description?: string
	cost: number
	startPeriod?: string
	endPeriod?: string
	params?: string[]
}

export type Document = {
	type: string
	title: string
	date: string
}

export type User = {
	id: string
	name: string
	avatar: string
	activated: boolean
	orgStatistics: UserOrgStatistics
	contracts?: DocPact[]
	payments?: DocPact[]
	employees: {
		tableEmployees: TableData
		employeesList: EmployeeItem[]
	}

	eventsStatistic: EventsStatistic
	cabinetInfo: CabinetInfo

	tariffs: Tariff[]
	documents: Document[]

	eventsDescription: {
		description: string
		activity: string[]
	}

	tableTariffPayments: string[][]
	currentTariffInfo: Tariff
}
