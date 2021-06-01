/*function firstNameElLog() {
    let id = "first_name";
    let el = document.getElementById(id);
    console.log(el.value);
}

function lastNameElLog() {
    let id = "last_name";
    let el = document.getElementById(id);
    console.log(el.value);
}*/

function logValue(id) {
    let el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    let el = document.getElementById(id);
    return el.value;
}

let firstNameId = "first_name";
let lastNameId = "last_name";

logValue(firstNameId);
logValue(firstNameId);
logValue(firstNameId);

logValue(lastNameId);
logValue(lastNameId);
logValue(lastNameId);

let value = getValue(firstNameId);
value = getValue(lastNameId);

alert(value);