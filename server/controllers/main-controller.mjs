import { users } from '../mockData/users.mjs'
import { contracts } from '../mockData/contracts.mjs'
import { payments } from '../mockData/payments.mjs'
import { schedule } from '../mockData/events.mjs'

export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)
	res.status(200).json(foundUser)
}

export const getAllContracts = (req, res) => {
	res.status(200).json(contracts)
}
export const getAllPayments = (req, res) => {
	res.status(200).json(payments)
}

export const getContractsFilesById = (req, res) => {
	const contractsFileId = req.params.id
	const contractsFile = contracts.find((contract) => contract.id.toString() === contractsFileId)
	res.status(200).json(contractsFile)
}

export const uploadContractsFilesById = (req, res) => {
	const newFiles = req.body

	console.log(newFiles)

	res.status(200).json(newFiles)
}

export const deleteContractsFileById = (req, res) => {
	const deleteFilesIndex = req.body
	res.status(200).json(deleteFilesIndex)
}

export const getAllEvents = (req, res) => {
	res.status(200).json(schedule)
}
