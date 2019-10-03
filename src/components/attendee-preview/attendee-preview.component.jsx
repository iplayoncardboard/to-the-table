import React from 'react';
import './attendee-preview-styles.scss';

const AttendeePreview = (props)=> {
    
    const {name, votesRemaining, imageUrl} = props
    
    return(
    <div className='attendee-preview'>
        {
                <div className='attendee' >
                   <p className='attendee-title'>{name}</p>
                   <p className='attendee-votes'>Votes: {votesRemaining}</p>
                    <img className='attendee-img' alt='avatar' src={imageUrl} />
                </div>
        }
        
    </div>
)}

export default AttendeePreview 