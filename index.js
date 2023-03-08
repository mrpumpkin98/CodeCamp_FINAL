const DDay = new Date("dateFormat").getTime();


setInterval(function () {
    const today = new Date().getTime();
    const gap = DDay - today;
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("d-day-container").innerHTML = day + "일 " + hour + "시간 " + min + "분 " + sec + "초";
}, 1000);

const dateFormMaker = function () {
    const inputYear = document.querySelector("#target-year-input").value;
    const inputMonth = document.querySelector("#target-month-input").value;
    const inputDate = document.querySelector("#target-date-input").value;

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    return dateFormat;
};

const starter = function (targetDateInput) {
    if (!targetDateInput) {
        targetDateInput = dateFormMaker();
    }
    setClearInterval();
    counterMaker(targetDateInput);
    const intervalId = setInterval(() => { counterMaker(targetDateInput); }, 1000);
    intervalIdArr.push(intervalId)
};

const setClearInterval = function () {
    localStorage.removeItem('saved-date');
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i]);
    }
}

const changeFocus1 = function () {
    let targetInput1 = document.getElementById("target-year-input").value
    if (targetInput1.length === 4) {
        document.getElementById("target-month-input").focus()
    }
}
const changeFocus2 = function () {
    let targetInput1 = document.getElementById("target-month-input").value
    if (targetInput1.length === 2) {
        document.getElementById("target-date-input").focus()
    }
}