export type Event = {
	id: string
	name: string
	location: string
	startTime: string
	startDate: string
	endTime: string
	endDate: string
}

export type EventsLists = {
	tableVisitors: string[][]
}

export type EventsData = {
	schedule: Event[]
	tableSchedule: string[][]
	lists: EventsLists
}
