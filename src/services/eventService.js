import { createEvent } from '../redux/events/events.actions';
import { store } from '../redux/store'
import { createEvent as fbCreate, updateEvent as fbUpdate} from '../firebase/firebase.utils'

export const createNewEvent = (eventDetails) =>{
    // handle event data
    console.log('Event Service Create Event');
    console.log(eventDetails)
    // dispatch event creation actions
    store.dispatch(createEvent(eventDetails));
    // add event to firestore db.
    fbCreate(eventDetails).then(newEvent => {
        console.log('sending udpate event')
        fbUpdate(newEvent)});
    //update record with new id
    


}

export const updateEvent = (eventDetails) => {

}