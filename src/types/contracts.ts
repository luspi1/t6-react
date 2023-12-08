import { type ContractStatus } from 'src/helpers/consts'

export type Contract = {
	id: string
	name: string
	date: string
	status: ContractStatus
	cost?: string
	type: 'payments' | 'contracts'
	files: File[]
}
