import { createEvent,  updateNewEvent as rxUpdateNewEvent} from '../redux/events/events.actions';
import { store } from '../redux/store'
import { createEvent as fbCreate, updateNewEvent as fbUpdate} from '../firebase/firebase.utils'

export const createNewEvent = (eventDetails) => {
    store.dispatch(createEvent(eventDetails));
    fbCreate(eventDetails).then(newEvent => {
        fbUpdate(newEvent).then(id => store.dispatch(rxUpdateNewEvent(id)))
        });
}
