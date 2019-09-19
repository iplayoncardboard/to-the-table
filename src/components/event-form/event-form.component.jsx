import React from 'react';
import './event-form.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectEventHidden} from '../../redux/events/events.selector'
import {toggleCreateEventHidden} from '../../redux/events/events.actions';
import {withRouter} from 'react-router-dom';
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

    eventCancelation = ()=> {
        if(this.eventHidden){
            this.props.toggleCreateEventHidden();
        }
        this.props.history.push('/')
    }

    eventSave= ()=> {
        this.props.toggleCreateEventHidden();
    }

    componentDidMount(){
        if(!this.eventHidden){
            this.props.toggleCreateEventHidden()
        }
        console.log(this.props.eventHidden);
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
                <CustomButton className='custom-button save' handleClick={this.eventSave}>Save</CustomButton>
                <CustomButton className='custom-button cancel' handleClick={this.eventCancelation}>Cancel</CustomButton> 
            </form>
        </div>
    )
   } 
    
}

const mapStateToProps = createStructuredSelector({
    eventHidden: selectEventHidden
});

const mapDispatchToProps = dispatch => ({
    toggleCreateEventHidden: event => dispatch(toggleCreateEventHidden())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EventForm));