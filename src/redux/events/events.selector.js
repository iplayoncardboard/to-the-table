import { createSelector } from 'reselect'

const selectEvents = state => state.events;

 export const selectEventList = createSelector(
    [selectEvents],
    event => event.eventList)

export const selectAllEvents =  createSelector(
    [selectEventList],
    events => Object.keys(events).map(key=> events[key])
)

export const selectEventHidden = createSelector(
    [selectEvents],
    events => events.hidden
)

export const selectActiveEvent = eventId => createSelector(
    [selectEventList],
    events => events[eventId] 
)

export const selectActiveEventId = createSelector(
    [selectEvents],
    events => events.activeEvent
)