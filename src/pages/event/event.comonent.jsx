import React from 'react'
import {connect} from 'react-redux'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import {toggleEventHidden} from '../../redux/events/events.actions'

class Event extends React.Component {
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

    cancel = (event)=> {
        this.props.dispatch(toggleEventHidden)
    }
    render(){
        return(
            <div className='event-form'>
                <form onSubmit={this.handleSubmit}>
                <FormInput label='event name' handleChange={this.handleChange} value={this.state.name} name='name'/>
                <FormInput label='street' handleChange={this.handleChange} value={this.state.street} name='street'/>
                <FormInput label='city' handleChange={this.handleChange} value={this.state.city} name='city'/>
                <FormInput label='state' handleChange={this.handleChange} value={this.state.state} name='state'/>
                <FormInput label='zip' handleChange={this.handleChange} value={this.state.zip} name='zip'/>
                <CustomButton>Add Game</CustomButton>
                <CustomButton>Add Person</CustomButton>
                <CustomButton>Save</CustomButton>
                <CustomButton handleClick={this.cancel}>Cancel</CustomButton> 
                </form>
                
            </div>
        )
    }
}

export default connect(null)(Event)