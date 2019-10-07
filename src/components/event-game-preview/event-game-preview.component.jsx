import React from 'react';
import './event-game-preview.styles.scss';
import VotingButton from '../voting-button/voting-button.component';
import {connect} from 'react-redux'
import {voteForGame, voteAgainstGame, incrementUserVote, decrementUserVote } from '../../redux/events/events.actions'
import {selectActiveEvent} from '../../redux/events/events.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

const EventGamePreview = (props) => {
    const voteUp = ()=>{
        props.voteUpGame(props.eventId, props.id, props.currentUser)
        props.decrementUserVote(props.activeEvent(props.eventId), props.id, props.currentUser.id)
    }

    const voteDown = ()=>{
        props.voteDownGame(props.eventId, props.id, props.currentUser)
        props.incrementUserVote(props.activeEvent(props.eventId), props.id, props.currentUser.id)
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
        <div className='vote-count'>{props.votes}</div>
        <div className='vote-container'>
            
                <VotingButton className='vote-button' iconType='thumbUp' size='3' backgroundColor='' iconColor='rgb(63, 191, 63)' handleClick={voteUp}/>
                <VotingButton className='vote-button' iconType='thumbDown' size='3'  backgroundColor='' iconColor='red' handleClick={voteDown}/>
        </div>
    </div>
)}


const mapStateToProps = (state) => ({
    activeEvent: eventId => selectActiveEvent(eventId)(state),
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    voteUpGame: (eventId, gameId, currentUser) => dispatch(voteForGame(eventId, gameId,currentUser)),
    voteDownGame: (eventId, gameId, currentUser) => dispatch(voteAgainstGame(eventId, gameId,currentUser)),
    incrementUserVote: (event, gameId, userId) => dispatch(incrementUserVote(event, gameId, userId)),
    decrementUserVote: (event,gameId,userId) => dispatch(decrementUserVote(event,gameId,userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventGamePreview);