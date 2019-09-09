import React from 'react'
import './event-preview.styles.scss'


const EventPrevew = ({title, date, games, attendees}) => (
    <div className='event-preview'>
        <h3>{title}</h3>
            <div className='event-info'>
                <p><span className='info-header'>Date: </span><span className='info'>{date.date}</span></p>
                <p><span className='info-header'>Location: </span><span className='info'>{date.time}</span></p>
            </div>
            <div className='game-container'>
                {
                games.map((game, index)=>(
                    <div className='game' key={index}>
                        {game}
                    </div>
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
    )


export default EventPrevew