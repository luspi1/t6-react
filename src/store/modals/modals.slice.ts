import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type EmployeeFormData } from 'src/modals/employee-modal/schema'

type ModalsState = {
	isActiveEmployee: boolean
	employeeFormData: EmployeeFormData | null
	employeeNameInputs: string[]
}

const initialState: ModalsState = {
	isActiveEmployee: false,
	employeeFormData: null,
	employeeNameInputs: [],
}

export const modalsSlice = createSlice({
	name: NameSpace.Modals,
	initialState,
	reducers: {
		setActiveEmployee: (state, action: PayloadAction<boolean>) => {
			state.isActiveEmployee = action.payload
		},
		setEmployeeFormData: (state, action: PayloadAction<EmployeeFormData | null>) => {
			state.employeeFormData = action.payload
		},
		setEmployeeNameInputs: (state, action: PayloadAction<string[]>) => {
			state.employeeNameInputs = action.payload
		},
	},
})

export const modalsActions = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
