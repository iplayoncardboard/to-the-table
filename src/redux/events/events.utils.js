import {} from './events.selector'

export const addEvent = (eventList, eventData) => {
    return {...eventList, 0: eventData}
}

export const updateNewEvent = (eventList, eventData) => {
    eventList[eventData] = eventList[0];
    delete eventList[0];
    eventList[eventData].id = eventData;
    return {...eventList}
}

export const togglePrivateEvent = (eventList, event) => {
    let targetEvent = eventList[event.id];
    
    if(targetEvent) {
        targetEvent.privateEvent = !targetEvent.privateEvent
        let updatedEventList = {...eventList, [targetEvent.id]: targetEvent}
        return updatedEventList;
    }
    return eventList
}

//increase vote count and add record of user vote to game's votesCast array
export const increaseGameVote = (eventList, eventDetails)=> {
    //find target event from list by eventDetails id
    let targetEvent = eventList[eventDetails.eventId];
    //Check if event exists and user is part of the event
if(targetEvent && userIsAttendee(targetEvent.attendees, eventDetails.user.id)){
    const remaingVotes = getRemainingVotes(targetEvent.attendees,eventDetails.user.id)
    //check if games array is poulated and the user has votes left to use. 
    if(targetEvent.games && targetEvent.games.length > 0 && remaingVotes > 0) {
        //cycle through event game array if game id in event details matches a game in the array...
        let updatedGameArray = targetEvent.games.map(game => {
           if(game.id === eventDetails.gameId){
            //look for no votes cast for the game or no votes casy by the user and cast first vote
                if(game.votesCast.length === 0 || !gameVotesCastContainsUser(game.votesCast, eventDetails.user.id)){
                    return {...game, votes:game.votes+1, votesCast:[{userId: eventDetails.user.id, votes: 1}]}
                } 
            // or look for votes cast by the user and incriement them y 1. 
                   let newVotesArray = game.votesCast.map( vote => vote.userId === eventDetails.user.id ? {...vote, votes:vote.votes +1} : vote)
                    return {...game, votes:game.votes+1, votesCast:newVotesArray}
                
            }
           
            return game
        });
            targetEvent = {...targetEvent, games:updatedGameArray}
        } 
        return ({...eventList, [targetEvent.id]:targetEvent})
    }
    return (eventList)
}


//see above
export const decreaseGameVote = (eventList, eventDetails)=> {
    let targetEvent = eventList[eventDetails.eventId];
    if(targetEvent && userIsAttendee(targetEvent.attendees, eventDetails.user.id)){
    const remaingVotes = getRemainingVotes(targetEvent.attendees,eventDetails.user.id)
  
    if(targetEvent.games && targetEvent.games.length > 0) {
        let updatedGameArray = targetEvent.games.map(game => {
            
            if(game.id === eventDetails.gameId && game.votes >= 1 && remaingVotes < targetEvent.baseVotes && gameVotesCastContainsUser(game.votesCast, eventDetails.user.id)) {
               
                let newVotesArray = game.votesCast.map( vote => vote.userId === eventDetails.user.id ? {...vote, votes:vote.votes -1} : vote)
                    return {...game, votes:game.votes-1, votesCast:newVotesArray}
                                
            } else { return {...game};}

           
        });
            targetEvent = {...targetEvent, games:updatedGameArray}
        } 
        return ({...eventList, [targetEvent.id]:targetEvent})
    }
    return (eventList)
}

export const increaseUserVote = (eventList, eventDetails) => {

    let targetEvent = eventList[eventDetails.event.id];
    if(targetEvent && userIsAttendee(targetEvent.attendees, eventDetails.userId)){
        const remaingVotes = getRemainingVotes(targetEvent.attendees,eventDetails.userId)
        
       let updatedAttendeeArray = targetEvent.attendees.map(attendee =>{
            if(attendee.id === eventDetails.userId && remaingVotes < targetEvent.baseVotes && userVotesCastContainsGame(attendee.votesCast, eventDetails.gameId)){
                let newVotesCastArray = attendee.votesCast.map(vote => vote.gameId===eventDetails.gameId ? {...vote, votes: vote.votes - 1} : vote )
                return {...attendee, votesRemaining: attendee.votesRemaining+1, votesCast:newVotesCastArray}
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
    if(targetEvent && userIsAttendee(targetEvent.attendees, eventDetails.userId)) {
        let updatedAttendeeArray = targetEvent.attendees.map(attendee=>{
            if(userCanRedcueVote(attendee, eventDetails)){
                const votedForGame = userVotesCastContainsGame(attendee.votesCast, eventDetails.gameId)
                if(votedForGame) {
                    let newVotesCastArray = attendee.votesCast.map(vote => vote.gameId===eventDetails.gameId ? {...vote, votes: vote.votes + 1} : vote )
                    return {...attendee, votesRemaining: attendee.votesRemaining-1, votesCast:newVotesCastArray}
                }
                
                let newVotesCastArray = [...attendee.votesCast, {gameId: eventDetails.gameId, votes:1}];
                return {...attendee, votesRemaining: attendee.votesRemaining-1, votesCast:newVotesCastArray}
            }
            return attendee
        });
            targetEvent = {...targetEvent, attendees: updatedAttendeeArray }
        return {...eventList, [targetEvent.id]:targetEvent}
    }
    return eventList
}

const gameVotesCastContainsUser = (voteArray, userId) => voteArray.find(vote => vote.userId === userId && vote.votes > 0)

const getRemainingVotes= (attendeeArray, userId) => attendeeArray.find(attendee => {
        return attendee.id === userId
    }).votesRemaining



const userCanRedcueVote = (attendee, eventDetails) => 
    attendee.id === eventDetails.userId && attendee.votesRemaining > 0 
    ? true 
    : false;

const userVotesCastContainsGame = (arrayOfUserVotes, gameId) => arrayOfUserVotes.find(vote => vote.gameId === gameId && vote.votes > 0)

const userIsAttendee = (arrayOfAttendees, userId) => arrayOfAttendees.some(attendee =>  attendee.id === userId)