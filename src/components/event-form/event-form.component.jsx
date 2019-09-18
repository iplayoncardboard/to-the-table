import React from 'react';
import './event-form.styles.scss'
import {connect} from 'react-redux';
import {toggleEventHidden} from '../../redux/events/events.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class EventForm extends React.Component{ 
    
    constructor(props){
        super(props) 
        this.state={
            name:'',
            date:{},
            street:'',
            city:'',
            state:'',
            zip:'',
            games:[],
            attendees:[]
        }
    }

    
    handleSubmit = (event) =>{
        event.preventDefault();

    }

    handleChange=(event)=> {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    cancelEventCreation = ()=> {
        this.props.dispatch(toggleEventHidden)
    }
    
   render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <FormInput className='name form-input' label='event name' handleChange={this.handleChange} value={this.state.name} name='name'/>
                <FormInput className='street form-input' label='street' handleChange={this.handleChange} value={this.state.street} name='street'/>
                <FormInput className='city form-input' label='city' handleChange={this.handleChange} value={this.state.city} name='city'/>
                <FormInput className='state form-input' label='state' handleChange={this.handleChange} value={this.state.state} name='state'/>
                <FormInput className='zip form-input' label='zip' handleChange={this.handleChange} value={this.state.zip} name='zip'/>
                <CustomButton className='custom-button add-game'>Add Game</CustomButton>
                <CustomButton className='custom-button add-person'>Add Person</CustomButton>
                <CustomButton className='custom-button save'>Save</CustomButton>
                <CustomButton className='custom-button cancel' handleClick={this.cancelEventCreation}>Cancel</CustomButton> 
            </form>
        </div>
    )
   } 
    
}
export default connect(null)(EventForm);