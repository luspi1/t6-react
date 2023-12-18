import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NameSpace } from 'src/helpers/consts'

import { userApi } from 'src/store/user/user.api'

import { profileSidebarReducer } from 'src/modules/profile-sidebar/store/profile-sidebar.slice'
import { modalsReducer } from 'src/store/modals/modals.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.ProfileSidebar]: profileSidebarReducer,
		[NameSpace.Modals]: modalsReducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware),
})

setupListeners(store.dispatch)
