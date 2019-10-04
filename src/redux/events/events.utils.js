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

    const remaingVotes = targetEvent.attendees.find(attendee => {
        return attendee.id === eventDetails.userId
    }).votesRemaining

    
    if(targetEvent.games && targetEvent.games.length > 0 && remaingVotes > 0) {
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

export const increaseUserVote = (eventList, eventDetails) => {

    let targetEvent = eventList[eventDetails.event.id];
    if(targetEvent){
       let updatedAttendeeArray = targetEvent.attendees.map(attendee =>{
            if(attendee.id === eventDetails.userId){
                return {...attendee, votesRemaining: attendee.votesRemaining+1}
            }
            return attendee;
        })
        targetEvent = {...targetEvent, attendees: updatedAttendeeArray  }
        return {...eventList, [targetEvent.id]:targetEvent}
    }
    

    return eventList;
}

export const decreaseUserVote = (eventList, eventDetails) => {

    let targetEvent = eventList[eventDetails.event.id]
    if(targetEvent) {
        let updatedAttendeeArray = targetEvent.attendees.map(attendee=>{
            if(attendee.id === eventDetails.userId && attendee.votesRemaining > 0){
                return {...attendee, votesRemaining: attendee.votesRemaining-1}
            }
            return attendee
        });
        targetEvent = {...targetEvent, attendees: updatedAttendeeArray  }
        return {...eventList, [targetEvent.id]:targetEvent}
    }
    return eventList
}

