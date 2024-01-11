import { type State } from 'src/types/state'
import { NameSpace } from 'src/helpers/consts'

export const getEventsScheduleState = (state: State) => state[NameSpace.Events].eventsSchedule
