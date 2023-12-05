import { type ContractStatus } from 'src/helpers/consts'

export type UserOrgStatistics = {
	events: number[]
	visits: number[]
	fundraisers: number[]
	percentEvents: number
}

export type Contract = {
	id: number
	name: string
	date: string
	status: ContractStatus
	cost?: string
	type: 'payment' | 'contract'
}

export type EmployeeEventItem = {
	id: string
	relevance: string
	position: string
	title: string
	dates: string
}

export type EmployeeItem = {
	id: string
	typeEmployment: string
	position: string
	fullName: string
	dateEmployment: string
	status: string
	email: string
	phone: string
	avatar: string
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
		employeesList: EmployeeItem[]
	}
}
