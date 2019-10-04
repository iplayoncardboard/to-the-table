import {createSelector} from 'reselect'

const selectEvents = state => state.events;

 const selectEventList = createSelector(
    [selectEvents],
    event => event.eventList)

export const selectCurrentEvent = createSelector(
    [selectEvents],
    event => event.currentEvent
)

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