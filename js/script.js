
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
   color.disabled = false;
   
   for(let i = 1; i < colorOptions.length; i++) {
       //dropdown theme selection
       let themeSelection = e.target.value;
       console.log(themeSelection);
       //data theme attribute of selected theme
        let dataTheme = colorOptions[i].getAttribute('data-theme');
        console.log(dataTheme);

        /*
            conditional statement - based on user's theme selection
            the color options for t-shirts will display
        */
        if (themeSelection === dataTheme) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', true);
        } if(themeSelection !== dataTheme) {
            colorOptions[i].hidden = true;
            colorOptions[i].setAttribute('selected', false);
        }
   }
});


// //STEP 6

// /*
//     Selecting elements: register for activities & total activity cost element
// */
// const activities = document.getElementById('activities');
// const cost = document.getElementById('activities-cost');

// /*
//     Created event listener to keep track of activities selected and costs of each activity
//     to return the total cost of selected activities
// */

// activities.addEventListener('change', (e) => {
//     let totalCost = 0;
//     const activityCost = e.target.getAttribute('data-cost');
//     const checkboxStatus = e.target;
    
//     if(checkboxStatus.checked) {
//         totalCost = +activityCost + totalCost;
//     } else {
//         totalCost = totalCost - +activityCost;
//     }
    
//     cost.innerHTML = `Total: $${totalCost}`;
// });

// //STEP 7

// //Selecting payment method elements
// const paymentMethod = document.getElementById('payment');
// const creditCard = document.getElementById('credit-card');
// const payPal = document.getElementById('paypal');
// const bitCoin = document.getElementById('bitcoin');

// /*
//     Hiding Paypal & bitCoin payment methods as default
// */
// payPal.hidden = true;
// bitCoin.hidden = true;

// /*
//     setting default payment method to credit card
// */
// paymentMethod.children[1].setAttribute('selected', true);

// /*
//     Event listener added to detect which payment method the user selects -
//     Based on the payment method selected a user will have next step payment options
// */
// paymentMethod.addEventListener('change', (e) => {
//     const paymentSelection = e.target.value;
       
//     if(paymentSelection === 'paypal') {
//            payPal.hidden = false;
//            bitCoin.hidden = true;
//            creditCard.hidden = true;
//     } if (paymentSelection === 'credit-card') {
//            payPal.hidden = true;
//            bitCoin.hidden = true;
//            creditCard.hidden = false;
//     } if (paymentSelection === 'bitcoin') {
//         payPal.hidden = true;
//         bitCoin.hidden = false;
//         creditCard.hidden = true;
//     }
// });

// //STEP 8

// //Selecting Elements

// const email = document.getElementById('email');
// const cardNumber = document.getElementById('cc-num');
// const zipCode = document.getElementById('zip');
// const cvvNumber = document.getElementById('cvv');
// const form = document.getElementsByTagName('form')[0];

// /*
//     Helper functions used to validate input fields
// */

// function updateParentElementClassList (childElement, classNameAddValue, classNameRemoveValue, displayValue) {
//     const parentElement = childElement.parentElement;
//     parentElement.classList.add(classNameAddValue);
//     parentElement.classList.remove(classNameRemoveValue);
//     parentElement.lastElementChild.hidden = displayValue;
// }

// function emailValidator() {
//     const emailField = email.value;
//     const emailValidate = /^[^@]+@[^@.]+\.[A-Z]+$/i.test(emailField);
//     if(!emailValidate) {
//         updateParentElementClassList (
//             email, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     } if (emailValidate) {
//         updateParentElementClassList (
//             email, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     }
//     return emailValidate;
// }


// function nameValidator() {
//     const nameField = nameInput.value;
//     const nameValidate = /^[A-Za-z]+ ?[A-Za-z]+ ?[A-Za-z]+$/i.test(nameField);
//     if(!nameValidate) {
//         updateParentElementClassList (
//             nameInput, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     } if (nameValidate) {
//         updateParentElementClassList (
//             nameInput, 
//             'valid', 
//             'not-valid', 
//             'true'
//         );
//     }
//     return nameValidate;
// }

// function creditCardNumberValidator() {
//     const ccNumber = cardNumber.value;
//     const creditCardValidate = /^[\d]{13,16}$/.test(ccNumber);
//     if(!creditCardValidate) {
//         updateParentElementClassList (
//             cardNumber, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     } if (creditCardValidate) {
//         updateParentElementClassList (
//             cardNumber, 
//             'valid', 
//             'not-valid', 
//             'true'
//         );
//     }
//     return creditCardValidate;
// }

// function creditCardZipCodeValidator() {
//     const zipNumber = zipCode.value;
//     const zipCodeValidate = /^[\d]{5}$/.test(zipNumber);
//     if(!zipCodeValidate) {
//         updateParentElementClassList (
//             zipCode, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     } if (zipCodeValidate) {
//         updateParentElementClassList (
//             cvvNumber, 
//             'valid', 
//             'not-valid', 
//             'true'
//         );
//     }
//     return zipCodeValidate;
// }

// function cvvCodeValidator() {
//     const cvv = cvvNumber.value;
//     const cvvValidate = /^[\d]{3}$/.test(cvv);
//     if(!cvvValidate) {
//         updateParentElementClassList (
//             cvvNumber, 
//             'not-valid', 
//             'valid', 
//             'false'
//         );
//     } if (cvvValidate) {
//         updateParentElementClassList (
//             cvvNumber, 
//             'valid', 
//             'not-valid', 
//             'true'
//         );
//     }
//     return cvvValidate;
// }

// const checkBoxes = document.querySelectorAll('[type="checkbox"]');

// function checkboxValidator () {
//     let numberOfChecks = 0;
//     for(let i = 1; i < checkBoxes.length; i++) {
//        if(checkBoxes[i].checked === true) {
//            numberOfChecks += 1
//        } else {
//            numberOfChecks;
//        }
//     }
//     return numberOfChecks;
// }

// //STEP 9

// form.addEventListener('submit', (e) => {
//     // e.preventDefault();
    
//     if(!nameValidator() && !emailValidator() && checkboxValidator() < 1) {
//         e.preventDefault();   
//     }
    
//     if(paymentMethod.value === 'credit-card') {
//         if(!creditCardNumberValidator() && !creditCardZipCodeValidator() && !cvvCodeValidator()) {
//             e.preventDefault();
//         }
//     }
// });

// for(let i = 1; i < checkBoxes.length; i++) {
//     checkBoxes[i].addEventListener('focus', (e) => { 
//         checkBoxes[i].classList.add('focus');
//     });
    
//     checkBoxes[i].addEventListener('blur', (e) => {
//         checkBoxes[i].parentElement.classList.remove('focus');
//     });
// }
