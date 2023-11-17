import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { profileSidebarActions } from 'src/modules/profile-sidebar/store/profile-sidebar.slice'

const actions = {
	...profileSidebarActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
