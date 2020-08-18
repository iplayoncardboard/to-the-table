import {EventActionTypes} from './events.types';
import EVENT_DATA from './mock.data';
import {addEvent, togglePrivateEvent, increaseGameVote, decreaseGameVote, increaseUserVote, decreaseUserVote } from './events.utils';

const INITIAL_STATE={
    eventList: EVENT_DATA,
    hidden: true,
    activeEvent: 0

}

const eventsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EventActionTypes.CREATE_EVENT:
            console.log('reducer');
            console.log(action.payload);
            return({
                ...state,
                eventList: addEvent(state.eventList, action.payload)}
            )
     
        case EventActionTypes.TOGGLE_CREATE_EVENT_HIDDEN:
                return({
                    ...state,
                    hidden: !state.hidden
            });
        case EventActionTypes.TOGGLE_PRIVATE_EVENT:
            return ({
                ...state,
                eventList: togglePrivateEvent(state.eventList, action.payload)
            })
        case EventActionTypes.INCREASE_GAME_VOTE: 
            return({
                ...state,
                eventList: increaseGameVote(state.eventList, action.payload)
            })
            case EventActionTypes.DECREASE_GAME_VOTE: 
            return({
                ...state,
                eventList: decreaseGameVote(state.eventList, action.payload)
            })
            case EventActionTypes.INCREASE_REMAINING_USER_VOTES:
                return({
                    ...state,
                    eventList: increaseUserVote(state.eventList, action.payload)
                })
            case EventActionTypes.DECREASE_REMAINING_USER_VOTES:
                    return({
                        ...state,
                        eventList: decreaseUserVote(state.eventList, action.payload)
                    })
            case EventActionTypes.SET_ACTIVE_EVENT_ID:
                return({
                    ...state,
                    activeEvent: action.payload
                })
        default: return state 
    }
}

export default eventsReducer;