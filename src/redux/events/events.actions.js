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

export const voteForGame = (eventId, gameId, userId) => {
    return(
        {
            type: GuideActionTypes.INCREASE_GAME_VOTE,
            payload: {
                eventId,
                gameId,
                userId
            }
        }
    )
}

export const voteAgainstGame = (eventId, gameId,userId) => {
    return(
        {
            type: GuideActionTypes.DECREASE_GAME_VOTE,
            payload: {
                eventId,
                gameId,
                userId
            }
        }
    )
}

export const incrementUserVote = (event, userId) => {
    return( {
        type: GuideActionTypes.INCREASE_REMAINING_VOTES,
        payload:{
            userId,
            event
        }
    })
}

export const decrementUserVote = (event, userId) => {
    return( {
        type: GuideActionTypes.DECREASE_REMAINING_VOTES,
        payload:{
            userId,
            event
        }
    })
}