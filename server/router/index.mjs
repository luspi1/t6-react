import {
	getUserById,
	getContractsFilesById,
	uploadContractsFilesById,
	deleteContractsFileById,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/user/:id', getUserById)
router.get('/contract-files/:id', getContractsFilesById)

router.post('/upload-contract-files/:id', uploadContractsFilesById)

router.delete('/delete-contract-files/:id', deleteContractsFileById)
