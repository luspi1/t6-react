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

	eventsStatistic: {
		createdEventsCount: number
		heldEventsCount: number
		currentEventsCount: number
		cancelledEventsCount: number
		totalVisitors: number
		paidVisitors: number
		earnings: number
	}

	cabinetInfo: {
		shortOrganizationName: string
		fullOrganizationName: string
		brandName: string
		region: string
		site: string
		email: string
		password: string
		hidePassword: boolean
		phone: string
		authenticationSecondFactor: true
	}

	eventsDescription: {
		description: string
		activity: string[]
	}
}
