export const togglePrivateEvent = (eventList, event) => {
    let targetEvent = eventList[event.id];
    
    if(targetEvent) {
        targetEvent.privateEvent = !targetEvent.privateEvent
        let updatedEventList = {...eventList, [targetEvent.id]: targetEvent}
        return updatedEventList;
    }
    return eventList
}


export const increaseVoteCount = (eventList, eventDetails)=> {
    let targetEvent = eventList[eventDetails.eventId];
if(targetEvent){
    if(targetEvent.games && targetEvent.games.length > 0) {
        let updatedGameArray = targetEvent.games.map(game => {
            return game.id === eventDetails.gameId? 
                 {...game, votes:game.votes+1}
                 :game
        });
            targetEvent = {...targetEvent, games:updatedGameArray}
        } 
        return ({...eventList, [targetEvent.id]:targetEvent})
    }
    return (eventList)
}


export const decreaseVoteCount = (eventList, eventDetails)=> {
    let targetEvent = eventList[eventDetails.eventId];
if(targetEvent){
    if(targetEvent.games && targetEvent.games.length > 0) {

        let updatedGameArray = targetEvent.games.map(game => {
            
            if(game.id === eventDetails.gameId && game.votes >= 1) {
                return {...game, votes:game.votes-1}
            }

            return {...game};
        });
            targetEvent = {...targetEvent, games:updatedGameArray}
        } 
        return ({...eventList, [targetEvent.id]:targetEvent})
    }
    return (eventList)
}


