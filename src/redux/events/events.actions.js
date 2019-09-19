import {GuideActionTypes} from './events.types'

export const setEvents = events =>{
    return ({
        type: GuideActionTypes.SET_EVENTS,
        payload: events
    });
}

export const setCurrentEvent = event => {
    return({
        type: GuideActionTypes.SET_CURRENT_EVENT,
        payload: event
    });
}

export const toggleCreateEventHidden = ()=>{
        return (
            {type: GuideActionTypes.TOGGLE_CREATE_EVENT_HIDDEN
        });
    }
