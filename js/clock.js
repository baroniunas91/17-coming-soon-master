function renderClock(selector, time) {
    const DOM = document.querySelector(selector);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="time">
                    <div class="value">${ time[i]}</div>
                    <div class="label">${ labels[i]}</div>
                </div>`;
    }
    return DOM.innerHTML = HTML;
}
export default renderClock;