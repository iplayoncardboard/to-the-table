import React from 'react';
import './event-preview.styles.scss';
import EventDetails from '../event-details/event-details.component';
import EventGamePreview from '../event-game-preview/event-game-preview.component';
import AttendeePreview from '../attendee-preview/attendee-preview.component'
import {connect} from 'react-redux'
import {togglePrivateEvent, setActiveEvent} from '../../redux/events/events.actions';
import {selectActiveEvent} from '../../redux/events/events.selector';

class EventPreview extends React.Component {  
    constructor(props){
        super(props)
        this.state = {}
    }


 

render(){

const { togglePrivate, activeEvent, setAsActiveEvent} = this.props;
const {id, title, date, games, attendees, privateEvent, address} = this.props.event;

       return (
        <div className='event-preview'>
            <EventDetails
                id={id} 
                handleEventClick={()=> setAsActiveEvent(id)} 
                title={title} 
                date={date} 
                privateEvent={privateEvent} 
                address={address} 
                handlePrivateEyeClick={()=> togglePrivate(activeEvent(id))}
                />
            <div className='game-preview-container'>
                {
                    games? games.map((game, index)=>(
                        <EventGamePreview eventId = {id} key={index} showVoting={true} {...game}/>
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
    }


    const mapStateToProps = (state, ownProps) => ({

        activeEvent: eventId => selectActiveEvent(eventId)(state)
    })

    const mapDispatchToProps = dispatch => ({
            togglePrivate: event => dispatch(togglePrivateEvent(event)),
            setAsActiveEvent: eventId => dispatch(setActiveEvent(eventId))
    })

export default connect(mapStateToProps, mapDispatchToProps)(EventPreview)