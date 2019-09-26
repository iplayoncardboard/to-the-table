import {GuideActionTypes} from './events.types';
import EVENT_DATA from './mock.data';

const INITIAL_STATE={
    eventList: EVENT_DATA,
    hidden: true,
    currentEvent: {}
}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
     
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