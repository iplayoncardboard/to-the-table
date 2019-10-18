import React from 'react';
import './create-event-button.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const CreateEventButton = (props) => {
    
   
    
    return(
     <Link to='/NewEvent'>
    <CustomButton className='create-event-button' >                
        {props.children}
    </CustomButton>
    </Link> 
)}



export default connect(null)(CreateEventButton)
