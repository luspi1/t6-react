export type UserOrgStatistics = {
	events: number[]
	visits: number[]
	fundraisers: number[]
	percentEvents: number
}

export type User = {
	id: string
	name: string
	avatar: string
	activated: boolean
	orgStatistics: UserOrgStatistics
}
