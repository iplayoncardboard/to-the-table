import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import EVENT_DATA from './mock.data'
import './user-landing.styles.scss'

import { selectCurrentUser } from '../../redux/user/user.selector';
import { setEvents } from '../../redux/events/events.actions';
import {selectAllEvents, selectCurrentEvent} from '../../redux/events/events.selector'
import EventPrevew from '../../components/event-preview/event-preview.component';

class UserLanding extends React.Component{ 
    
   componentDidMount(){
    const { setEvents } = this.props; 
    setEvents(EVENT_DATA);
   }
render(){
    const {events} = this.props
    return(
    <div className='user-landing'>
        <h1>Welcome {this.props.currentUser.displayName}</h1>
        <h2>My Events</h2>
        <div className='collection-container'>
        {
            events.map(({id, ...otherProps})=>(
                <EventPrevew key={id} {...otherProps}/>))
        }
        </div>

        <h2>Upcomming Events</h2>
        <div className='collection-container'>
        {
            this.props.events.map(({id, ...otherProps})=>(
                <EventPrevew key={id} {...otherProps}/>))
        }
        </div>
    </div>)}
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentEvent: selectCurrentEvent,
    events: selectAllEvents
})

const mapDispatchToProps = dispatch => (
    {
        setEvents: events => dispatch(setEvents(events))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(UserLanding)