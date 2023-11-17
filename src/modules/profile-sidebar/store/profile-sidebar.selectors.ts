import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getSidebarItems = (state: State) => state[NameSpace.ProfileSidebar].sidebarItems
