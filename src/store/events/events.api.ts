import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import { type EventsData } from 'src/types/event'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllEvents: build.query<EventsData, null>({
			query: () => ({
				url: `events`,
			}),
		}),
	}),
})

export const { useGetAllEventsQuery } = eventsApi
