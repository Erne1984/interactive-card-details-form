const inputCardNumber = document.querySelector("#card-number");
const msgCardNumber = document.querySelector("#card-number-msg");
const displayCardNumberDesktop = document.querySelector("#display-numCard-desktop");
const displayCardNumberMobile = document.querySelector("#display-numCard-mobile");

const inputName = document.querySelector("#name");
const msgName = document.querySelector("#name-msg");
const displayNameDesktop = document.querySelector("#display-name-desktop");
const displayNameMobile = document.querySelector("#display-name-mobile");

const inputMonth = document.querySelector("#month");
const msgMonth = document.querySelector("#month-msg");
const displayMonthDesktop = document.querySelector("#display-month-desktop");
const displayMonthMobile = document.querySelector("#display-month-mobile");

const inputYear = document.querySelector("#year");
const msgYear = document.querySelector("#year-msg");
const displayYearDesktop = document.querySelector("#display-year-desktop");
const displayYearMobile = document.querySelector("#display-year-mobile");

const inputCvc = document.querySelector("#input-cvc");
const msgCvc = document.querySelector("#cvc-msg");
const displayCvcDektop = document.querySelector("#display-cvc-desktop");
const displayCvcMobile = document.querySelector("#display-cvc-mobile");


const btn = document.querySelector("#btn");

const inputs = document.querySelectorAll(".input-text");

function errorMsg(input, msg) {
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    return msg;
}

function cleanInput(input, msg) {
    input.style.border = "";
    msg.innerHTML = "";
}

function validatingName() {
    let nameRegex = /^[a-zA-Z\s]+$/;

    if (inputName.value == "") {
        msgName.innerHTML = errorMsg(inputName, "Can't be blank")
    } else if (!inputName.value.match(nameRegex)) {
        msgName.innerHTML = errorMsg(inputName, "Valid name")
    } else {
        cleanInput(inputName, msgName);
        displayNameDesktop.innerHTML = inputName.value;
        displayNameMobile.innerHTML = inputName.value;
    }
}

function validatingCardNumber() {
    let numberRegex = /^[0-9\s]*$/;
    if (inputCardNumber.value == "") {
        msgCardNumber.innerHTML = errorMsg(inputCardNumber, "Can't be blank");
    } else if (!inputCardNumber.value.match(numberRegex)) {
        msgCardNumber.innerHTML = errorMsg(inputCardNumber, "Numbers only");
    } else if (inputCardNumber.value.length < 19) {
        msgCardNumber.innerHTML = errorMsg(inputCardNumber, "Too short");
    } else if (inputCardNumber.value.length > 20) {
        inputCardNumber.value = inputCardNumber.value.slice(0, 10);
    } else {
        cleanInput(inputCardNumber, msgCardNumber);
        displayCardNumberDesktop.innerHTML = inputCardNumber.value;
        displayCardNumberMobile.innerHTML = inputCardNumber.value;
    }
}

function formartCardNumber() {
    inputCardNumber.value = inputCardNumber.value.replace(/\D/g, '')
    inputCardNumber.value = inputCardNumber.value.replace(/(\d{4})/g, '$1 ').trim();
}

function validatingMonth() {
    let numberRegex = /^[0-9\s]*$/;

    if (inputMonth.value == "") {
        msgMonth.innerHTML = errorMsg(inputMonth, "Can't be blank")
    } else if (!inputMonth.value.match(numberRegex)) {
        msgMonth.innerHTML = errorMsg(inputMonth, "Number Only")
    } else if (inputMonth.value.length > 2) {
        inputMonth.value = inputMonth.value.slice(0, 2);
    } else if (inputMonth.value > 12 || inputMonth.value < 1) {
        cleanInput(inputMonth, msgMonth);
        msgMonth.innerHTML = errorMsg(inputMonth, "invalide month!")
    } else {
        cleanInput(inputMonth, msgMonth);
        displayMonthDesktop.innerHTML = inputMonth.value;
        displayMonthMobile.innerHTML = inputMonth.value;
    }
}

function validatingYear() {
    let numberRegex = /^[0-9\s]*$/;
    let currentYear = new Date().getFullYear();

    console.log(currentYear)

    if (inputYear.value == "") {
        msgYear.innerHTML = errorMsg(inputYear, "Can't be blank")
    } else if (!inputYear.value.match(numberRegex)) {
        msgYear.innerHTML = errorMsg(inputYear, "Valid name")
    } else if (inputYear.value.length > 2) {
        inputYear.value = inputYear.value.slice(0, 2);
    } else if ("20" + inputYear.value < currentYear) {
        cleanInput(inputYear, msgYear);
        msgYear.innerHTML = errorMsg(inputYear, "invalide year!")
    } else {
        cleanInput(inputYear, msgYear);
        displayYearDesktop.innerHTML = inputYear.value;
        displayYearMobile.innerHTML = inputYear.value;
    }
}

function validatingCvc() {
    let numberRegex = /^[0-9\s]*$/;

    if (inputCvc.value == "") {
        msgCvc.innerHTML = errorMsg(inputCvc, "Can't be blank")
    } else if (!inputCvc.value.match(numberRegex)) {
        msgCvc.innerHTML = errorMsg(inputCvc, "Valid name")
    } else if (inputCvc.value.length < 3) {
        msgCvc.innerHTML = errorMsg(inputCvc, "Too short")
    } else if (inputCvc.value.length > 3) {
        inputCvc.value = inputCvc.value.slice(0, 3);
    } else {
        cleanInput(inputCvc, msgCvc);
        displayCvcDektop.innerHTML = inputCvc.value;
        displayCvcMobile.innerHTML = inputCvc.value;
    }
}

btn.addEventListener("click", () => {

})
inputName.addEventListener(("blur"), () => {
    validatingName()
})
inputCardNumber.addEventListener(("blur"), () => {
    formartCardNumber()
    inputCardNumber.style.border = "";
    validatingCardNumber()
})
inputMonth.addEventListener(("blur"), () => {
    validatingMonth()
})
inputYear.addEventListener(("blur"), () => {
    validatingYear()
})
inputCvc.addEventListener(("blur"), () => {
    validatingCvc()
})