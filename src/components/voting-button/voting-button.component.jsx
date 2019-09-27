import React from 'react';
import './voting-button.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faPlus, faMinus, faExclamation } from '@fortawesome/free-solid-svg-icons';

const VotingButton = ({iconType, size, backgroundColor, iconColor, handleClick}) => {

    const setIcon = iconType => {
        switch(iconType){
            case 'thumbUp': return faThumbsUp
            case 'thumbDown': return faThumbsDown
            case 'plus': return faPlus
            case 'minus': return faMinus
            default: return faExclamation
        }
    }

  return(  
    <div
        className='vote-button' 
        style={{
            color:iconColor, 
            backgroundColor: backgroundColor
        }}
        onClick={handleClick}
    >
        <FontAwesomeIcon className='vote-icon' icon={setIcon(iconType)} size={`${size}x`}/>
    </div>
)}


export default VotingButton;