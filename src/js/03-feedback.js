import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const msg = document.querySelector("textarea");

form.addEventListener("input", throttle(svStorage, 500, {'trailing': false}));

function setmsg(e) {
    const inputsValues = {};

    const {email, message} = e.currentTarget.elements;

    inputsValues.message = message.value;
    inputsValues.email= email.value;

    return inputsValues;
};

function svStorage(e) {
    localStorage.setItem("feedback-form-state", JSON.stringify(setmsg(e)))
};

function checkStorage() {
if (localStorage.getItem("feedback-form-state") === null) {
    return;
} else {
    const {email, message} = JSON.parse(localStorage.getItem("feedback-form-state"))
    input.value = email;
    msg.value = message;
}
};

checkStorage();

function submit(e) {
    e.preventDefault();
    console.log(setmsg(e));
    localStorage.removeItem("feedback-form-state");
    input.value = "";
    msg.value = "";
}

form.addEventListener("submit", submit)