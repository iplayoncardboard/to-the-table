import React from 'react';
import {connect} from 'react-redux';
import './event.styles.scss';

import EventForm from '../../components/event-form/event-form.component';

const Event = ()=>(
    
<div className='event-form'>
    <EventForm  />
</div>) 

export default connect(null)(Event)