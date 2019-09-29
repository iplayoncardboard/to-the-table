import React from 'react';
import './event-preview.styles.scss';
import EventDetails from '../event-details/event-details.component';
import EventGamePreview from '../event-game-preview/event-game-preview.component';
import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect';
import {togglePrivateEvent} from '../../redux/events/events.actions';


///may need to convert to class based component when 
const EventPreview = (props) => { 
    
    const {id, title, date, games, attendees, privateEvent, address, togglePrivate} = props
    // console.log(props)
    return (

        <div className='event-preview'>
            <EventDetails title={title} date={date} privateEvent={privateEvent} address={address} handleClick={()=> togglePrivate(props)}/>
            <div className='game-preview-container'>
                {
                    
                    games? games.map((game, index)=>(
                      
                            <EventGamePreview eventId = {id} key={index} {...game}/>

                        
                    ))
                    : null
                }
            </div>
            
            
                <div className='attendee-preview-container'>
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

    const mapDispatchToProps = dispatch => ({
            togglePrivate: event => dispatch(togglePrivateEvent(event))
    })

export default connect(null, mapDispatchToProps)(EventPreview)

// export default EventPreview
