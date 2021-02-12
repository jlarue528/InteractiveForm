
//STEP 3

/*
    Selecting the name input & setting focus state to true -
    This will make the name input the default focus state
*/
const nameInput = document.querySelector('input[type="text"]');
nameInput.focus();

//Step 4

//Selecting Job Role Select Element
const jobRole = document.getElementById('title');

/*
    Selecting Other Job Role Element & setting its display style to be hidden
*/
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

/*
    Setting an event listener to watch job role element
*/
jobRole.addEventListener('change', (e) => {
    const jobSelected = e.target.value;
    if(jobSelected === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

//STEP 5

//Selecting design & color elements
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.children;


//Setting color property to disabled
color.disabled = true;

/*
    Add event listener to t-shirt design dropdown
*/ 
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

// //STEP 6

/*
    Selecting elements: register for activities & total activity cost element
*/
const activities = document.getElementById('activities');
const cost = document.getElementById('activities-cost');

/*
    Created event listener to keep track of activities selected and costs of each activity
    to return the total cost of selected activities
*/

let totalCost = 0;
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

// //STEP 7

//Selecting payment method elements
const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
/*
    Hiding Paypal & bitCoin payment methods initially
*/
payPal.hidden = true;
bitCoin.hidden = true;

/*
    setting default payment method to credit card
*/
paymentMethod.children[1].setAttribute('selected', true);

/*
    Event listener added to detect which payment method the user selects -
    Based on the payment method selected a user will have next step payment options
*/
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

//STEP 8

//Selecting Elements
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvvNumber = document.getElementById('cvv');
const form = document.getElementsByTagName('form')[0];

/*
    Helper functions used to validate input fields
*/


function nameValidator() {
    const nameField = nameInput.value;
    const nameValidate = /^[A-Za-z]+ ?[A-Za-z]+ ?[A-Za-z]+$/i.test(nameField);

    console.log(nameValidate);
    return nameValidate;
}

function emailValidator() {
    const emailField = email.value;
    const emailValidate = /^[^@]+@[^@.]+\.[A-Z]+$/i.test(emailField);

    console.log(emailValidate);
    return emailValidate;
}

function creditCardNumberValidator() {
    const ccNumber = cardNumber.value;
    const creditCardValidate = /^[\d]{13,16}$/.test(ccNumber);
  
    console.log(creditCardValidate);
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
    //nameInput
    const parent = childElement.parentElement;
        parent.classList.add('not-valid');
        parent.classList.remove('valid');
        parent.lastElementChild.hidden = false;
}

function passedValidationUpdate (childElement) {
    //nameInput
    const parent = childElement.parentElement;
        parent.classList.add('not-valid');
        parent.classList.remove('valid');
        parent.lastElementChild.hidden = true;
}

form.addEventListener('submit', (e) => {
    // e.preventDefault();

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
});

//step 9

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
