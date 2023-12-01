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
	status: string
	cost?: string
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
