export const togglePrivateEvent = (eventList, event) => {
    let targetEvent = eventList[event.id];
    
    if(targetEvent) {
        targetEvent.privateEvent = !targetEvent.privateEvent
        let updatedEventList = {...eventList, [targetEvent.id]: targetEvent}
        return updatedEventList;
    }

    return eventList


}