import React from 'react'
import './event-preview.styles.scss'
import EventDetails from '../event-details/event-details.component'
import EventGamePreview from '../event-game-preview/event-game-preview.component'
///may need to convert to class based component when 
const EventPrevew = (props) => { 
    const {title, date, gamesIds, attendees, privateEvent, address} = props
    return (
    
    <div className='event-preview'>
        <EventDetails title={title} date={date} privateEvent={privateEvent} address={address}/>
        <div className='game-preview-container'>
            {
                gamesIds.map((game, index)=>(
                    <EventGamePreview key={index} name={game.name} imageUrl={game.imageUrl}/>
                ))
            }
        </div>
         
        
            <div className='attendee-container'>
                {
                    attendees.map((attendee, index)=>(
                        <div className='attendee' key={index}>
                            {attendee}
                        </div>
                        ))
                }
            </div>
    </div>
    )}


export default EventPrevew


