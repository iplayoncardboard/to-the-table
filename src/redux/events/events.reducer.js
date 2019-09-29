import {GuideActionTypes} from './events.types';
import EVENT_DATA from './mock.data';
import { togglePrivateEvent, increaseVoteCount,decreaseVoteCount } from './events.utils';

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
            });
        case GuideActionTypes.TOGGLE_PRIVATE_EVENT:
            return ({
                ...state,
                eventList: togglePrivateEvent(state.eventList, action.payload)
            })
        case GuideActionTypes.INCREASE_GAME_VOTE: 
            return({
                ...state,
                eventList: increaseVoteCount(state.eventList, action.payload)
            })
            case GuideActionTypes.DECREASE_GAME_VOTE: 
            return({
                ...state,
                eventList: decreaseVoteCount(state.eventList, action.payload)
            })
        default: return state 
    }
}

export default eventsReducer;