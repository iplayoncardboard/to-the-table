import {createSelector} from 'reselect'

const selectEvents = state => state.events;

export const selectCurrentEvent = createSelector(
    [selectEvents],
    (event) => event.currentEvent
)

export const selectAllEvents =  createSelector(
    [selectEvents],
    (events) => events.eventList
)

export const selectEventHidden = createSelector(
    [selectEvents],
    (events) => events.hidden
)