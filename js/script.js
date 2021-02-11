//Selecting the name input & setting focus state to true
const nameInput = document.querySelector('input[type="text"]');
nameInput.focus();

//Selecting Job Role Select Element
const jobRole = document.getElementById('title');
// console.log(jobRole);

//Selecting Other Job Role Element & setting its display style to be hidden
const otherJobRole = document.getElementById('other-job-role');
// console.log(otherJobRole);
otherJobRole.style.display = 'none';

//Setting an event listener to watch job role element
jobRole.addEventListener('change', (e) => {
    const jobSelected = e.target.value;
    if(jobSelected === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

//Selecting design & color elements
const design = document.getElementById('design');
const color = document.getElementById('color');
const colorOptions = color.children;
// console.log(colorOptions);

//Setting color property to disabled
color.disabled = true;

//Add event listener to tshirt design dropdown 
design.addEventListener('change', (e) => {
   color.disabled = false;
   
   for(let i = 1; i < colorOptions.length; i++) {
       //dropdown theme selection
       let themeSelection = e.target.value;
       //data theme attribute of selected theme
        let dataTheme = colorOptions[i].getAttribute('data-theme');

        //conditional statement - based on user's theme selection
        //the color options for t-shirts will display
        if (themeSelection === dataTheme) {
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected', true);
        } else {
            colorOptions[i].hidden = true;
            colorOptions[i].setAttribute('selected', false);
        }
   }
});

//Selecting elements: register for activities & total activity cost element
const activities = document.getElementById('activities');
const cost = document.getElementById('activities-cost');

//Created event listener to keep track of activities selected and costs of each activity
//to return the total cost of selected activities
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




