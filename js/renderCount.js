import renderClock from './clock.js';
import countdown from './countdown.js';
import createEventDate from './createEventDate.js';

let eventDate = createEventDate();

function renderCount() {
    const currentDate = new Date().getTime();
    const deadLine = new Date(eventDate).getTime();
    const leftTime = deadLine - currentDate;

    if (leftTime >= 0) {
        renderClock('.clock', countdown(eventDate));
        setTimeout(renderCount, 1000);
    } else {
        renderClock('.clock', ["0", "00", "00", "00"]);
        console.log("Programos pabaiga");

    }
}

export default renderCount;