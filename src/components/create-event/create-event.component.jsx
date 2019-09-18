import React from 'react';
import './create-event.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../custom-button/custom-button.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {toggleEventHidden} from '../../redux/events/events.actions'

const CreateEvent = ({dispatch}, ...otherProps) => {
    
    const openEventPage = (event) => {
        dispatch(toggleEventHidden)
    }
    
    return(
    <CustomButton className='create-event-button' handleClick={openEventPage}>                
        <FontAwesomeIcon className='add-icon'  icon={faPlus} size='1x' />
    </CustomButton>
)}



export default connect(null)(CreateEvent)
