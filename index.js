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
