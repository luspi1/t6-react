export type Event = {
	id: string
	name: string
	location: string
	start: Date
	end: Date
}

export type EventsData = {
	schedule: Event[]
	tableSchedule: string[][]
}
