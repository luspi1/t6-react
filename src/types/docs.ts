import { type DocStatus } from 'src/helpers/consts'

export type DocPact = {
	id: string
	name: string
	date: string
	status: DocStatus
	cost?: string
	type: 'payments' | 'contracts'
	files: File[]
}
