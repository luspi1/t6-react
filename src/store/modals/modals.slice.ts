import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type EmployeeFormData } from 'src/modals/employee-modal/schema'

type EmployeeModalState = {
	isActive?: boolean
	isEdit?: boolean
	formData?: EmployeeFormData | null
}

type ModalsState = {
	employeeModal: EmployeeModalState
}

const initialState: ModalsState = {
	employeeModal: {
		isActive: false,
		isEdit: false,
		formData: null,
	},
}

export const modalsSlice = createSlice({
	name: NameSpace.Modals,
	initialState,
	reducers: {
		setEmployeeModal: (state, action: PayloadAction<EmployeeModalState>) => {
			state.employeeModal.isActive = action.payload.isActive ?? state.employeeModal.isActive
			state.employeeModal.isEdit = action.payload.isEdit ?? state.employeeModal.isEdit
			state.employeeModal.formData = action.payload.formData
		},
	},
})

export const modalsActions = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
