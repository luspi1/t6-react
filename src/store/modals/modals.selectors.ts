import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getEmployeeModalState = (state: State) => state[NameSpace.Modals].employeeModal
