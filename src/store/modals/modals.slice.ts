import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type EmployeeFormData } from 'src/modals/employee-modal/schema'

type ModalsState = {
	isActiveEmployee: boolean
	employeeFormData: EmployeeFormData | null
}

const initialState: ModalsState = {
	isActiveEmployee: false,
	employeeFormData: null,
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
	},
})

export const modalsActions = modalsSlice.actions
export const modalsReducer = modalsSlice.reducer
