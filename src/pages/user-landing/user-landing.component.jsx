import React, { useState, useEffect }   from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './user-landing.styles.scss'

import { selectCurrentUser } from '../../redux/user/user.selector';
import {selectAllEvents, selectEventList} from '../../redux/events/events.selector'
import { getAllUserEvents } from '../../redux/events/events.actions'
import EventPreview from '../../components/event-preview/event-preview.component';

const UserLanding = (props)=> {
    
    const {currentUser, events, 
        getAllUserEvents
    } = props
   
    useEffect(() => {
        console.log(events && currentUser)
        if(events.length === 0) {
            getAllUserEvents(currentUser.email);
            console.log('component events');
            console.log(events);
        }
    })
    
    return(
    <div className='user-landing'>
        <h1>Welcome {currentUser.displayName}</h1>
        <h2>My Events</h2>
        <div className='collection-container'>
        {
            events.map( event =>(
                <EventPreview key={event.id} event={event}/>))
        }

        </div>

        {/* <h2>Upcomming Events</h2>
        <div className='collection-container'>
        {
            events.map((event)=>(
                <EventPreview key={event.id} event= {event}/>))
        }
        </div> */}
    </div>)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    events: selectAllEvents
});

const mapDispatchToProps = dispatch => ({
    getAllUserEvents: userEmail => dispatch(getAllUserEvents(userEmail))
  })
  

export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)