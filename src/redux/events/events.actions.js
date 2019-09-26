import {GuideActionTypes} from './events.types'


export const setCurrentEvent = event => {
    return({
        type: GuideActionTypes.SET_CURRENT_EVENT,
        payload: event
    });
}

export const togglePrivateEvent = event => {
    return({
        type: GuideActionTypes.TOGGLE_PRIVATE_EVENT,
        payload: event
    })
}

export const toggleCreateEventHidden = ()=>{
        return (
            {type: GuideActionTypes.TOGGLE_CREATE_EVENT_HIDDEN
        });
    }
