function countdown(eventTime) {
    const currentDate = new Date().getTime();
    const deadLine = new Date(eventTime).getTime();
    const leftTime = deadLine - currentDate;
    // console.log(leftTime);

    let array = [];
    if (leftTime > 0) {
        let s = Math.floor(leftTime / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);

        h = h % 24;
        m = m % 60;
        s = s % 60;

        if (h < 10) {
            h = "0" + h;
        }

        if (m < 10) {
            m = "0" + m;
        }

        if (s < 10) {
            s = "0" + s;
        }
        array = [d, h, m, s];
    } else {
        array = ['0', '00', '00', '00'];
    }
    return array;
}

export default countdown;