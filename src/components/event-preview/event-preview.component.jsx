import React from 'react';
import './event-preview.styles.scss';
import EventDetails from '../event-details/event-details.component';
import EventGamePreview from '../event-game-preview/event-game-preview.component';
import AttendeePreview from '../attendee-preview/attendee-preview.component'
import {connect} from 'react-redux'
import {togglePrivateEvent} from '../../redux/events/events.actions';
import {selectCurrentEvent, selectActiveEvent} from '../../redux/events/events.selector';

const EventPreview = (props)=> {  

const { togglePrivate, activeEvent} = props;
const {id, title, date, games, attendees, privateEvent, address} = props.event;

  
       return (
        <div className='event-preview'>
            <EventDetails 
                handleEventClick={()=> activeEvent(id)} 
                title={title} 
                date={date} 
                privateEvent={privateEvent} 
                address={address} 
                handlePrivateEyeClick={()=> togglePrivate(activeEvent(id))}/>
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
                    attendees? attendees.map((attendee, index)=>(
                <AttendeePreview key={index} {...attendee}/>
                     ))
                    :null }
            </div>
        </div>
    )}


    const mapStateToProps = (state, ownProps) => ({
        currentEvent: selectCurrentEvent(state),
        activeEvent: eventId => selectActiveEvent(eventId)(state)
    })

    const mapDispatchToProps = dispatch => ({
            togglePrivate: event => dispatch(togglePrivateEvent(event))
    })

export default connect(mapStateToProps, mapDispatchToProps)(EventPreview)