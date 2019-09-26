import React from 'react'
import './event-details.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

 const EventDetails = ({title, date, address, privateEvent}) => (
    <div className='event-details'>
        <div className='event-info'>
            <p>{privateEvent}</p>
            <h3>{title}</h3>
                <p><span className='info-header'>Date: </span><span className='info'>{date.date}</span> <span className='info-header'> @:</span>{date.time}</p>
                <p><span className='info-header'>Location: </span><span className='info'>{address.street}</span></p>
        </div>
        <div>
            {privateEvent?
            <FontAwesomeIcon className='private-icon'  icon={faEyeSlash} size='2x'/>:
            <FontAwesomeIcon className='private-icon'  icon={faEye} size='2x'/>
            }
        </div>
    </div>
)

export default EventDetails;