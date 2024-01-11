import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type SchedulePointFormData } from 'src/pages/events-schedule-page/layout/edit-events-schedule/schema'

type EventsScheduleState = {
	formData?: SchedulePointFormData | null
}

type EventsState = {
	eventsSchedule: EventsScheduleState
}

const initialState: EventsState = {
	eventsSchedule: {
		formData: [],
	},
}

export const eventsSlice = createSlice({
	name: NameSpace.Modals,
	initialState,
	reducers: {
		setEventsSchedule: (state, action: PayloadAction<EventsScheduleState>) => {
			state.eventsSchedule.formData = action.payload.formData
		},
	},
})

export const eventsActions = eventsSlice.actions
export const eventsReducer = eventsSlice.reducer
