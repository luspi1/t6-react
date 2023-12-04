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

export type EmployeeUser = {
	id: string
	typeEmployment: string
	position: string
	fullName: string
	dateEmployment: string
	status: string
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
		employeesList: Array<Record<string, string>>
	}
}
