import React from 'react'
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect'
import './event-details.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {selectCurrentUser} from '../../redux/user/user.selector'
 const EventDetails = ({id,title, date, address, privateEvent, handlePrivateEyeClick, handleEventClick, currentUser}) => 
 (
    <div className='event-details'>
        <div className='event-info'>
        <Link to={`/${currentUser.id}/events/${id}`}>
            <h3 onClick={handleEventClick}>{title}</h3>
        </Link>
            {privateEvent?
            <FontAwesomeIcon onClick={handlePrivateEyeClick} className='private-icon'  icon={faEyeSlash} size='2x'/>:
            <FontAwesomeIcon onClick={handlePrivateEyeClick} className='private-icon'  icon={faEye} size='2x'/>
            }
        </div>
        <div>
        <p><span className='info-header'>Date: </span><span className='info'>{date.date}</span> <span className='info-header'> @:</span>{date.time}</p>
                <p><span className='info-header'>Location: </span><span className='info'>{address.street}</span></p>
            
           
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(EventDetails);