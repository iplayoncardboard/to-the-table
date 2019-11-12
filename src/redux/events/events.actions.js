import {GuideActionTypes} from './events.types'


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

export const voteForGame = (eventId, gameId, user) => {
    return(
        {
            type: GuideActionTypes.INCREASE_GAME_VOTE,
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
            type: GuideActionTypes.DECREASE_GAME_VOTE,
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
        type: GuideActionTypes.INCREASE_REMAINING_USER_VOTES,
        payload:{
            userId,
            gameId,
            event
        }
    })
}

export const decrementUserVote = (event, gameId, userId) => {
    return( {
        type: GuideActionTypes.DECREASE_REMAINING_USER_VOTES,
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
            type: GuideActionTypes.SET_ACTIVE_EVENT_ID,
            payload: eventId
        }
    )
} 
