import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { NameSpace } from 'src/helpers/consts'

import { userApi } from 'src/store/user/user.api'

import { profileSidebarReducer } from 'src/modules/profile-sidebar/store/profile-sidebar.slice'

export const store = configureStore({
	reducer: {
		[NameSpace.ProfileSidebar]: profileSidebarReducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware),
})

setupListeners(store.dispatch)
