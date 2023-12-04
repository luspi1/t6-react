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
}

export type User = {
	id: string
	name: string
	avatar: string
	activated: boolean
	orgStatistics: UserOrgStatistics
	contracts?: Contract[]
	payments?: Contract[]
}
