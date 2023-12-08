import { users } from '../mockData/users.mjs'
import { contracts } from '../mockData/contracts.mjs'

export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)
	res.status(200).json(foundUser)
}

export const getAllContracts = (req, res) => {
	res.status(200).json(contracts)
}

export const getContractsFilesById = (req, res) => {
	const contractsFileId = req.params.id
	const contractsFile = contracts.find((contract) => contract.id.toString() === contractsFileId)
	res.status(200).json(contractsFile)
}

export const uploadContractsFilesById = (req, res) => {
	const contractId = req.params.id;
	const newFiles = req.body

	console.log(newFiles)

	// const updatedContracts = contracts.map(contract => {
	// 	 if (contract.id === contractId) {
	// 		 return {
	// 			 ...contract,
	// 			 files: [...contract.files, ...newFiles]
	// 		 }
	// 	 } else {
	// 		 return contract
	// 	 }
	// })
	// contracts.splice(0, contracts.length, ...updatedContracts);
	console.log(newFiles)

	res.status(200).json(newFiles)
}

export const deleteContractsFileById = (req, res) => {
	const contractId = req.params.id;
	const deleteFilesIndex = req.body
	res.status(200).json(deleteFilesIndex)

}
