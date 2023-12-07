import { users, contracts } from '../mockData/users.mjs'

export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)
	res.status(200).json(foundUser)
}

export const getContractsFilesById = (req, res) => {
	const ContractsFileId = req.params.id
	const ContractsFile = contracts.find((contract) => contract.id.toString() === ContractsFileId)
	res.status(200).json(ContractsFile)
}

export const uploadContractsFilesById = (req, res) => {
	const UserContactId = req.params.id

	console.log(`UserContactId: ${UserContactId}`)

	users.forEach((user) => {
		user.contracts.forEach((item) => {
			if (item.id === UserContactId) {
				item.files.splice(item.files.length, 0, req.body)

				console.log(users)
				return
			}
		})

		user.payments.forEach((item) => {
			if (item.id === UserContactId) {
				console.log(req.body)
				item.files.splice(item.files.length, 0, req.body)
				console.log(users)
				return
			}
		})
	})

	// res.status(200).json(contractFile)
}

export const deleteContractsFileById = (req, res) => {
	const UserContactId = req.params.id

	users.forEach((user) => {
		user.contracts.forEach((item) => {
			if (item.id === UserContactId) {
				//
				return
			}
		})

		user.payments.forEach((item) => {
			if (item.id === UserContactId) {
				item.files.splice(0, 1)
				return
			}
		})
	})
}
