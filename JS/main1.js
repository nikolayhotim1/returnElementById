/*function logFirstNameElValues() {
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
}

function logLastNameElValues() {
    console.log(lastNameEl.value);
    console.log(lastNameEl.className);
}

function logAddressElValues() {
    console.log(addressEl.value);
    console.log(addressEl.className);
}

function logCitiesElValues() {
    console.log(citiesEl.value);
    console.log(citiesEl.className);
}

function logHobbiesElValues() {
    console.log(hobbiesEl.value);
    console.log(hobbiesEl.className);
}*/

function logValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

function getEl(id) {
    console.log("somebody wants find element by id");
    let el = document.getElementById(id);
    return el;
}

// create elements by id
let firstNameId = "first_name";
let firstNameEl = getEl(firstNameId);
//function logFirstNameElValues();
logValues(firstNameEl);

let lastNameId = "last_name";
let lastNameEl = getEl(lastNameId);
//function logLastNameElValues();
logValues(lastNameEl);


let addressId = "address";
let addressEl = getEl(addressId);
//function logAddressElValues();
logValues(addressEl);


let citiesId = "cities";
let citiesEl = getEl(citiesId);
//function logCitiesElValues();
logValues(citiesEl);

let hobbiesId = "hobbies";
let hobbiesEl = getEl(hobbiesId);
//function logHobbiesElValues();
logValues(hobbiesEl);

let avatarWrapperId = "avatar_wrapper";
let avatarWrapperEl = getEl(avatarWrapperId);
let avatarId = "avatar";
let avatarEl = getEl(avatarId);

//change elements
firstNameEl.value = "Matvey";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);
logValues(firstNameEl);

firstNameEl.className = "new_class_name";
// console.log(firstNameEl.value);
// console.log(firstNameEl.className);
logValues(firstNameEl);

lastNameEl.className = "last_name_input default_input error_input";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
logValues(lastNameEl);

lastNameEl.title = "Wrong last name";
// console.log(lastNameEl.value);
// console.log(lastNameEl.className);
logValues(lastNameEl);

avatarEl.src = "img/4.jpg";

avatarEl.title = "I am avatar";

citiesEl.value = "Minsk";
logValues(citiesEl);

hobbiesEl.value = "Toys, bathing, cars";
logValues(hobbiesEl);

avatarWrapperEl.innerHTML = "<ul id=\"list\"><li>1</li><li>2</li><li>3</li></ul>";

//create new elements for change existing inner HTML
let listId = "list";
let listEl = getEl(listId);

console.log(listEl.innerHTML);