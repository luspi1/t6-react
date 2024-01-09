import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import { type EventsData, type EventsLists } from 'src/types/event'

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
		getEventsLists: build.query<EventsLists, null>({
			query: () => ({
				url: `events/lists`,
			}),
		}),
	}),
})

export const { useGetAllEventsQuery, useGetEventsListsQuery } = eventsApi
