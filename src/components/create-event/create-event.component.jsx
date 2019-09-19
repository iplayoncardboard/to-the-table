import React from 'react';
import './create-event.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../custom-button/custom-button.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const CreateEvent = ({dispatch}, ...otherProps) => {
    
   
    
    return(
     <Link to='/NewEvent'>
    <CustomButton className='create-event-button' >                
        <FontAwesomeIcon className='add-icon'  icon={faPlus} size='1x' />
    </CustomButton>
    </Link> 
)}



export default connect(null)(CreateEvent)
