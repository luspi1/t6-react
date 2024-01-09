import {
	getUserById,
	getContractsFilesById,
	uploadContractsFilesById,
	deleteContractsFileById,
	getAllContracts,
	getAllPayments,
	getAllEvents, getEventsLists
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/user/:id', getUserById)
router.get('/all-contracts', getAllContracts)
router.get('/all-payments', getAllPayments)
router.get('/contract-files/:id', getContractsFilesById)
router.get('/events', getAllEvents)
router.get('/events/lists', getEventsLists)

router.post('/upload-contract-files/:id', uploadContractsFilesById)

router.delete('/delete-contract-files/:id', deleteContractsFileById)
