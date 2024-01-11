import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { profileSidebarActions } from 'src/modules/profile-sidebar/store/profile-sidebar.slice'
import { modalsActions } from 'src/store/modals/modals.slice'
import { eventsActions } from 'src/store/events/events-schedule.slice'

const actions = {
	...profileSidebarActions,
	...modalsActions,
	...eventsActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
