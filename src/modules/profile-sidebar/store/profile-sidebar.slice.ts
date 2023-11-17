import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { menuItems } from 'src/modules/profile-sidebar/consts'
import { type MenuItem } from 'src/modules/profile-sidebar/types'

type ProfileSidebarState = {
	sidebarItems: MenuItem[]
}

const initialState: ProfileSidebarState = {
	sidebarItems: menuItems,
}
export const profileSidebarSlice = createSlice({
	name: NameSpace.ProfileSidebar,
	initialState,
	reducers: {
		changeMenuItemActive: (state, action: PayloadAction<number>) => {
			state.sidebarItems[action.payload].active = !state.sidebarItems[action.payload].active
		},
	},
})

export const profileSidebarActions = profileSidebarSlice.actions
export const profileSidebarReducer = profileSidebarSlice.reducer
