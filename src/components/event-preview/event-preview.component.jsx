import React from 'react';
import './event-preview.styles.scss';
import EventDetails from '../event-details/event-details.component';
import EventGamePreview from '../event-game-preview/event-game-preview.component';
import {connect} from 'react-redux'
// import {createStructuredSelector} from 'reselect';
import {togglePrivateEvent} from '../../redux/events/events.actions';


///may need to convert to class based component when 
const EventPreview = (props) => { 
    const { title, date, gamesIds, attendees, privateEvent, address, togglePrivate} = props
    


    return (
        <div className='event-preview'>
            <EventDetails title={title} date={date} privateEvent={privateEvent} address={address} handleClick={()=> togglePrivate(props)}/>
            <div className='game-preview-container'>
                {
                    gamesIds.map((game, index)=>(
                      
                            <EventGamePreview key={index} name={game.name} imageUrl={game.imageUrl}/>
                          
                        
                    ))
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
