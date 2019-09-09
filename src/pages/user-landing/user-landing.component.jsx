import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import EVENT_DATA from './mock.data'
import './user-landing.styles.scss'

import {selectCurrentUser} from '../../redux/user/user.selector'

import EventPrevew from '../../components/event-preview/event-preview.component';

const UserLanding = ({currentUser})=> {
    const collections = EVENT_DATA;
return(
    <div className='user-landing'>
        <h1>Welcome {currentUser.displayName}</h1>
        <h2>My Events</h2>
        <div className='collection-container'>
        {
            collections.map(({id, ...otherProps})=>(
                <EventPrevew key={id} {...otherProps}/>))
        }
        </div>

        <h2>Upcomming Events</h2>
        <div className='collection-container'>
        {
            collections.map(({id, ...otherProps})=>(
                <EventPrevew key={id} {...otherProps}/>))
        }
        </div>

        
    </div>)
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(UserLanding)