import { type Contract } from 'src/types/contracts'

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
	typeEmployment: 'постоянный' | 'временный'
	status: 'активен' | 'не активен'
	accountActivity: boolean
	position: string
	fullName: string
	dateEmployment: string
	email: string
	phone: string
	avatar: string
	tableEvents: TableData
	events: EmployeeEventItem[]
}

export type User = {
	id: string
	name: string
	avatar: string
	activated: boolean
	orgStatistics: UserOrgStatistics
	contracts?: Contract[]
	payments?: Contract[]
	employees: {
		tableEmployees: TableData
		employeesList: EmployeeItem[]
	}
}
