export type UserOrgStatistics = {
	events: number[]
	visits: number[]
	fundraisers: number[]
	percentEvents: number
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
	employees: {
		employeesList: Array<Record<string, string>>
	}
}
