import eventDateData from '../data/createEventData.js';

function createEventDate() {
    let eventDate = "";
    for (let i = 0; i < 1; i++) {
        eventDate = `${eventDateData[i].year}-${eventDateData[i].month}-${eventDateData[i].day}T${eventDateData[i].hours}:${eventDateData[i].minutes}`
    }
    return eventDate
}
export default createEventDate