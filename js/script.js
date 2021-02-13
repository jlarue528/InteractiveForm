
/*
    DOM ELEMENTS
*/
const nameInput = document.querySelector('input[type="text"]');
const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
const design = document.getElementById('design');
const color = document.getElementById('color');
const activities = document.getElementById('activities');
const checkboxList = document.querySelector('#activities');
const cost = document.getElementById('activities-cost');
const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvNumber = document.getElementById('cvv');
const form = document.getElementsByTagName('form')[0];

/*
    Global Variables
*/
let totalCost = 0;
const colorOptions = color.children;

/*
    Helper Functions
*/
function nameValidator() {
    const nameField = nameInput.value;
    const nameValidate = /^[A-Za-z]+ ?[A-Za-z]+ ?[A-Za-z]+$/i.test(nameField);

    return nameValidate;
}

function emailValidator() {
    const emailField = email.value;
    const emailValidate = /^[^@]+@[^@.]+\.[A-Z]+$/i.test(emailField);

    return emailValidate;
}

function creditCardNumberValidator() {
    const ccNumber = cardNumber.value;
    const creditCardValidate = /^[\d]{13,16}$/.test(ccNumber);
  
    return creditCardValidate;
}

function creditCardZipCodeValidator() {
    const zipNumber = zipCode.value;
    const zipCodeValidate = /^[\d]{5}$/.test(zipNumber);
  
    return zipCodeValidate;
}

function cvvCodeValidator() {
    const cvv = cvvNumber.value;
    const cvvValidate = /^[\d]{3}$/.test(cvv);

    return cvvValidate;
}

function failedValidationUpdate (childElement) {
    const parent = childElement.parentElement;
        parent.classList.add('not-valid');
        parent.classList.remove('valid');
        parent.lastElementChild.hidden = false;
}

function passedValidationUpdate (childElement) {
    const parent = childElement.parentElement;
        parent.classList.add('valid');
        parent.classList.remove('not-valid');
        parent.lastElementChild.hidden = true;
}

/*
    Event Listeners
*/
jobRole.addEventListener('change', (e) => {
    const jobSelected = e.target.value;
    if(jobSelected === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

design.addEventListener('change', (e) => {
    const themeSelection = e.target;
    color.disabled = false;
    
    for(let i = 1; i < colorOptions.length; i++) {
        //data theme attribute of selected theme
         let dataTheme = colorOptions[i].getAttribute('data-theme');
 
         //Updates color dropdown upon selections
         colorOptions[0].textContent = 'Please select a color';
         color.value = 'Please select a color';
 
         /*
             conditional statement - based on user's theme selection
             the color options for t-shirts will display
         */
         if (themeSelection.value === dataTheme) {
             colorOptions[i].hidden = false;
         } if(themeSelection.value !== dataTheme) {
             colorOptions[i].hidden = true;
         }
    }
 });

activities.addEventListener('change', (e) => {
    const activityCost = e.target.getAttribute('data-cost');
    const checkboxStatus = e.target;
    
    if(checkboxStatus.checked) {
        totalCost = +activityCost + totalCost;
    } else {
        totalCost = totalCost - +activityCost;
    }
    
    cost.innerHTML = `Total: $${totalCost}`;
});

paymentMethod.addEventListener('change', (e) => {
    const paymentSelection = e.target.value;
       
    if(paymentSelection === 'paypal') {
           payPal.hidden = false;
           bitCoin.hidden = true;
           creditCard.hidden = true;
    } if (paymentSelection === 'credit-card') {
           payPal.hidden = true;
           bitCoin.hidden = true;
           creditCard.hidden = false;
    } if (paymentSelection === 'bitcoin') {
        payPal.hidden = true;
        bitCoin.hidden = false;
        creditCard.hidden = true;
    }
});

/*
    Form Validation
*/

form.addEventListener('submit', (e) => {

    const nameField = nameInput.value;
    const nameValidate = /^[A-Za-z]+ ?[A-Za-z]+ ?[A-Za-z]+$/i.test(nameField);

    if(!nameValidate) {
        failedValidationUpdate(nameInput);
        e.preventDefault();
    } else {
        passedValidationUpdate(nameInput);
    }
    
    const emailField = email.value;
    const emailValidate = /^[^@]+@[^@.]+\.[A-Z]+$/i.test(emailField);

    if(!emailValidate) {
        failedValidationUpdate(email);
        e.preventDefault();
    }   else {
        passedValidationUpdate(email);
    }
    
    if(paymentMethod.value === 'credit-card') {
        const creditCardNumberCheck = creditCardNumberValidator();
        const cvvCheck = cvvCodeValidator();
        const zipCodeCheck = creditCardZipCodeValidator()

        if(!creditCardNumberCheck) {
            failedValidationUpdate(cardNumber);
            e.preventDefault();
        }   else {
            passedValidationUpdate(cardNumber);
        }

        if(!zipCodeCheck) {
            failedValidationUpdate(zipCode);
            e.preventDefault();
        }   else {
            passedValidationUpdate(zipCode);
        }

        if(!cvvCheck) {
            failedValidationUpdate(cvvNumber);
            e.preventDefault();
        }   else {
            passedValidationUpdate(cvvNumber);
        }
    }

    if(totalCost < 100) {
        e.preventDefault();
        checkboxList.classList.remove('valid')
        checkboxList.classList.add('not-valid');
        checkboxList.lastElementChild = 'block'; 
    } else {
        checkboxList.classList.add('valid');
        checkboxList.classList.remove('not-valid');
        checkboxList.lastElementChild = 'none';
    }
});

/*
    Styling
*/

nameInput.focus();
otherJobRole.style.display = 'none';
color.disabled = true;
payPal.hidden = true;
bitCoin.hidden = true;
paymentMethod.children[1].setAttribute('selected', true);



/*
    Checkbox Styling
*/

const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

for(let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('focus', (e) => {
        const checkBoxParent = e.target.parentElement;
        checkBoxParent.classList.add('focus');
    });
    
    checkBoxes[i].addEventListener('blur', (e) => {
        const checkBoxParent = e.target.parentElement;
        checkBoxParent.classList.remove('focus');
    });
}