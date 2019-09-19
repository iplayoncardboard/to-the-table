import {GuideActionTypes} from './events.types';

const INITIAL_STATE={
    eventList:[],
    hidden: true,
    currentEvent: {}
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GuideActionTypes.SET_EVENTS: 
            return(
                {
                    ...state,
                    eventList: [...action.payload]
                }
            )
        case GuideActionTypes.SET_CURRENT_EVENT:
            return({
                ...state,
                currentEvent: action.payload
            })
            case GuideActionTypes.TOGGLE_CREATE_EVENT_HIDDEN:
                    return({
                        ...state,
                        hidden: !state.hidden
                    })
        default: return state 
    }
}

export default eventsReducer;