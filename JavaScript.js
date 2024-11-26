
document.getElementById('orderForm').addEventListener('submit', function (e) {
e.preventDefault(); 


const errors = document.querySelectorAll('.error-message');
errors.forEach(error => error.style.display = 'none');

let isValid = true;

// Проверка имени
const firstName = document.getElementById('firstName');
if (firstName.value.length < 2 || firstName.value.length > 20) {
isValid = false;
const error = document.getElementById('firstNameError');
error.textContent = 'Please, enter 2-20 characters';
error.style.display = 'block';
}

// Проверка фамилии
const lastName = document.getElementById('lastName');
if (lastName.value.length < 2 || lastName.value.length > 20) {
isValid = false;
const error = document.getElementById('lastNameError');
error.textContent = 'Please, enter 2-20 characters';
error.style.display = 'block';
}

// Проверка телефона
const phone = document.getElementById('phone');
const phonePattern = /^\d{3}-\d{3}-\d{3}$/;
if (!phonePattern.test(phone.value)) {
isValid = false;
const error = document.getElementById('phoneError');
error.textContent = 'Input is incorrect!';
error.style.display = 'block';
}


const destination = document.getElementById('destination');
if (destination.value.length < 2 || destination.value.length > 50) {
isValid = false;
const error = document.getElementById('destinationError');
error.textContent = 'Please, enter 2-50 characters';
error.style.display = 'block';
}

// Проверка даты и времени
const date = document.getElementById('date');
const time = document.getElementById('time');
if (!date.value || !time.value) {
isValid = false;
const error = document.getElementById('dateTimeError');
error.textContent = 'Please, select a valid date and time';
error.style.display = 'block';
}

// Проверка количества
const quantity = document.getElementById('quantity');
if (quantity.value <= 0) {
isValid = false;
const error = document.getElementById('quantityError');
error.textContent = 'Quantity must be greater than 0';
error.style.display = 'block';
}


if (isValid) {

const orderData = `
        First Name: ${firstName.value}
        Last Name: ${lastName.value}
        Phone: ${phone.value}
        Destination: ${destination.value}
        Date: ${date.value}
        Time: ${time.value}
        Quantity: ${quantity.value}
    `;

 alert('Order submitted successfully!\n' + orderData);
}
});



function newPhoto() {


const logo = document.querySelector('.header-image img');


if (logo.src.includes('header-img.png')) {
    logo.src = 'img/logo2.jpg';  
} else {
    logo.src = 'img/header-img.png';  
}
}

function hideFooter() {
    const footerText = document.getElementById('footerText');
    footerText.classList.toggle('hidden');
}
