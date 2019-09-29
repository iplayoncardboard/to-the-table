import React from 'react';
import './event-game-preview.styles.scss';
import VotingButton from '../voting-button/voting-button.component';
import {connect} from 'react-redux'
import {voteForGame, voteAgainstGame} from '../../redux/events/events.actions'

const EventGamePreview = (props) => {
    const voteUp = ()=>{
        props.voteUpGame(props.eventId, props.id)
    }

    const voteDown = ()=>{
        props.voteDownGame(props.eventId, props.id)
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

const mapDispatchToProps = dispatch => ({
    voteUpGame: (eventId, gameId) => dispatch(voteForGame(eventId, gameId)),
    voteDownGame: (eventId, gameId) => dispatch(voteAgainstGame(eventId, gameId))
})

export default connect(null, mapDispatchToProps)(EventGamePreview);