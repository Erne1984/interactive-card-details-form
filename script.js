const inputCardNumber = document.querySelector("#card-number");
const displayCardNumberDesktop = document.querySelector("#display-numCard-desktop");
const msgCardNumber = document.querySelector("#card-number-msg");

const inputName = document.querySelector("#name");
const displayNameDesktop = document.querySelector("#display-name-desktop");
const msgName = document.querySelector("#name-msg");

const inputMonth = document.querySelector("#month");
const msgMonth = document.querySelector("#month-msg");

const inputYear = document.querySelector("#year");
const msgYear = document.querySelector("#year-msg");

const displayExpDate = document.querySelector("#display-expDate-desktop");

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
        inputCardNumber.style.border = "";
        msgCardNumber.innerHTML = "";
    }
}

function formartCardNumber() {
    inputCardNumber.value = inputCardNumber.value.replace(/\D/g, '')
    inputCardNumber.value = inputCardNumber.value.replace(/(\d{4})/g, '$1 ').trim();
}

function validatingMonth(){
    let numberRegex = /^[0-9]*$/;
}

function validatingYear(){
    
}




btn.addEventListener("click", () => {
    isEmpty();
})
inputCardNumber.addEventListener(("blur"), () => {
    formartCardNumber()
    inputCardNumber.style.border = "";
})
inputs.forEach((input) => {
    console.log(input)
    input.addEventListener("blur", () => {
        validatingName()
        validatingCardNumber()
    })
})
