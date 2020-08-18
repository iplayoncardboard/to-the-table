import {EventActionTypes} from './events.types';

export const createEvent = eventDetails => {
    return({
        type: EventActionTypes.CREATE_EVENT,
        payload: eventDetails
    });
}

export const togglePrivateEvent = event => {
    return({
        type: EventActionTypes.TOGGLE_PRIVATE_EVENT,
        payload: event
    })
}

export const toggleCreateEventHidden = ()=>{
        return (
            {type: EventActionTypes.TOGGLE_CREATE_EVENT_HIDDEN
        });
    }

export const voteForGame = (eventId, gameId, user) => {
    return(
        {
            type: EventActionTypes.INCREASE_GAME_VOTE,
            payload: {
                eventId,
                gameId,
                user
            }
        }
    )
}

export const voteAgainstGame = (eventId, gameId, user) => {
    return(
        {
            type: EventActionTypes.DECREASE_GAME_VOTE,
            payload: {
                eventId,
                gameId,
                user
            }
        }
    )
}

export const incrementUserVote = (event, gameId, userId) => {
    return( {
        type: EventActionTypes.INCREASE_REMAINING_USER_VOTES,
        payload:{
            userId,
            gameId,
            event
        }
    })
}

export const decrementUserVote = (event, gameId, userId) => {
    return( {
        type: EventActionTypes.DECREASE_REMAINING_USER_VOTES,
        payload:{
            userId,
            gameId,
            event
        }
    })
}

export const setActiveEvent = eventId => {
    return(
        {
            type: EventActionTypes.SET_ACTIVE_EVENT_ID,
            payload: eventId
        }
    )
} 
