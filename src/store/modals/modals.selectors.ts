import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getEmployeeModalActivity = (state: State) => state[NameSpace.Modals].isActiveEmployee
export const getEmployeeFormData = (state: State) => state[NameSpace.Modals].employeeFormData
export const getEmployeeNameInputs = (state: State) => state[NameSpace.Modals].employeeNameInputs
