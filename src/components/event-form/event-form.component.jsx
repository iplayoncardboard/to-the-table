import React from 'react';
import './event-form.styles.scss'
import {connect} from 'react-redux';
import {selectActiveEventId, selectActiveEvent} from '../../redux/events/events.selector'
import {withRouter} from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import bggService from '../../services'
import { thisTypeAnnotation } from '@babel/types';
import EventGamePreview from '../event-game-preview/event-game-preview.component';
class EventForm extends React.Component{ 
    
    constructor(props){
        super(props) 
        this.state={
            id:0,
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

    componentDidMount(){
        let {curtentEventId, currentEventDetails} = this.props;
        if(curtentEventId !== 0){
          let currentEvent = currentEventDetails(curtentEventId)
          this.setState({
            id: currentEvent.id,  
            name: currentEvent.title,
            date: currentEvent.date,
            street:currentEvent.address.street,
            city:currentEvent.address.city,
            state:currentEvent.address.state,
            zip:currentEvent.address.zip,
            games:currentEvent.games,
            attendees:currentEvent.attendees
            
          })
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

    eventSave = ()=> {
        this.props.toggleCreateEventHidden();
    }


    
   render(){
      const {games,id , name, zip} = this.state
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <FormInput className='name form-input' label='event name' handleChange={this.handleChange} value={name} name='name'/>
                <FormInput className='street form-input' label='street' handleChange={this.handleChange} value={this.state.street} name='street'/>
                <FormInput className='city form-input' label='city' handleChange={this.handleChange} value={this.state.city} name='city'/>
                <FormInput className='state form-input' label='state' handleChange={this.handleChange} value={this.state.state} name='state'/>
                <FormInput className='zip form-input' label='zip' handleChange={this.handleChange} value={zip} name='zip'/>
                <CustomButton className='custom-button add-game'>Add Game</CustomButton>
                    {
                        games? games.map((game,index)=>(
                            <EventGamePreview eventId= {id} key={index} {...game} />
                        )) : null 
                    }
                <CustomButton className='custom-button add-person'>Add Person</CustomButton>
                <CustomButton className='custom-button save' handleClick={this.eventSave}>Save</CustomButton>
                <CustomButton className='custom-button cancel' handleClick={this.eventCancelation}>Cancel</CustomButton> 
            </form>
        </div>
    )
   } 
}

const mapStateToProps = (state) => ({
    curtentEventId: selectActiveEventId(state),
    currentEventDetails: eventId => selectActiveEvent(eventId)(state)
})

export default withRouter(connect(mapStateToProps)(EventForm));