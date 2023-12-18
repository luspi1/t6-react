import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { profileSidebarActions } from 'src/modules/profile-sidebar/store/profile-sidebar.slice'
import { modalsActions } from 'src/store/modals/modals.slice'

const actions = {
	...profileSidebarActions,
	...modalsActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
