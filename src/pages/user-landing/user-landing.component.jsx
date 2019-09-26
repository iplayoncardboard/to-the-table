import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import './user-landing.styles.scss'

import { selectCurrentUser } from '../../redux/user/user.selector';
import {selectAllEvents} from '../../redux/events/events.selector'
import EventPreview from '../../components/event-preview/event-preview.component';

class UserLanding extends React.Component{ 
    
  
render(){
    const {events} = this.props
   
    
    return(
    <div className='user-landing'>
        <h1>Welcome {this.props.currentUser.displayName}</h1>
        <h2>My Events</h2>
        <div className='collection-container'>
        {
            events.map((props)=>(
                <EventPreview key={props.id} {...props}/>))
        }
        </div>

        <h2>Upcomming Events</h2>
        <div className='collection-container'>
        {
            this.props.events.map((props)=>(
                <EventPreview key={props.id} {...props}/>))
        }
        </div>
    </div>)}
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    events: selectAllEvents
})



export default connect(mapStateToProps)(UserLanding)