import {GuideActionTypes} from './events.types';
import EVENT_DATA from './mock.data';
import { togglePrivateEvent, increaseGameVote, decreaseGameVote, increaseUserVote, decreaseUserVote } from './events.utils';

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
                eventList: increaseGameVote(state.eventList, action.payload)
            })
            case GuideActionTypes.DECREASE_GAME_VOTE: 
            return({
                ...state,
                eventList: decreaseGameVote(state.eventList, action.payload)
            })
            case GuideActionTypes.INCREASE_REMAINING_USER_VOTES:
                return({
                    ...state,
                    eventList: increaseUserVote(state.eventList, action.payload)
                })
            case GuideActionTypes.DECREASE_REMAINING_USER_VOTES:
                    return({
                        ...state,
                        eventList: decreaseUserVote(state.eventList, action.payload)
                    })
        default: return state 
    }
}

export default eventsReducer;