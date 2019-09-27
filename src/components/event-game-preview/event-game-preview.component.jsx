import React from 'react';
import './event-game-preview.styles.scss';
import VotingButton from '../voting-button/voting-button.component';
const EventGamePreview = (props) => {
    
    const voteUp = ()=>{
        console.log('Up')
    }

    const voteDown = ()=>{
        console.log('Down')
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
        <div className='vote-container'>
                <VotingButton className='vote-button' iconType='thumbUp' size='3' backgroundColor='' iconColor='rgb(63, 191, 63)' handleClick={voteUp}/>
                <VotingButton className='vote-button' iconType='thumbDown' size='3'  backgroundColor='' iconColor='red' handleClick={voteDown}/>
        </div>
    </div>
)}

export default EventGamePreview;