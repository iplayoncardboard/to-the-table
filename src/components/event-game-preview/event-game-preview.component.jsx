import React from 'react';
import './event-game-preview.styles.scss';
import VotingButton from '../voting-button/voting-button.component';
import {connect} from 'react-redux'
import {voteForGame, voteAgainstGame, incrementUserVote, decrementUserVote } from '../../redux/events/events.actions'
import {selectActiveEvent} from '../../redux/events/events.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

const EventGamePreview = (props) => {
    const {id, eventId,currentUser, showVoting=false, activeEvent, incrementUserVote,decrementUserVote, voteAgainstGame,voteForGame } = props;

    const voteUp = ()=>{
        voteForGame(eventId, id, currentUser)
        decrementUserVote(activeEvent(eventId), id, currentUser.id)
    }

    const voteDown = ()=>{
        voteAgainstGame(eventId, id, currentUser)
        incrementUserVote(activeEvent(eventId), id, currentUser.id)
    }

    const viewGame = ()=> {
        console.log('View Game')
    }

    return(
    <div className='game-card'>
        
        <div className='game-detais-container' onClick={viewGame}>
            <div className='game-title'>{props.name}</div>
            <div className='game-image-container'> 
                <img className='game-image' alt='game' src={props.imageUrl} />
            </div>
        </div>
        {
         showVoting? <div className='vote-count'>{props.votes}</div> : null
        }
        {
         showVoting? <div className='vote-container'>
            
                <VotingButton className='vote-button' iconType='plus' size='3' backgroundColor='rgb(245,246,247)' iconColor='black' handleClick={voteUp}/>
                <VotingButton className='vote-button' iconType='minus' size='3'  backgroundColor='rgb(245,246,247)' iconColor='black' handleClick={voteDown}/>
        </div>: null
        }
    </div>
)}


const mapStateToProps = (state) => ({
    activeEvent: eventId => selectActiveEvent(eventId)(state),
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    voteForGame: (eventId, gameId, currentUser) => dispatch(voteForGame(eventId, gameId,currentUser)),
    voteAgainstGame: (eventId, gameId, currentUser) => dispatch(voteAgainstGame(eventId, gameId,currentUser)),
    incrementUserVote: (event, gameId, userId) => dispatch(incrementUserVote(event, gameId, userId)),
    decrementUserVote: (event,gameId,userId) => dispatch(decrementUserVote(event,gameId,userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventGamePreview);