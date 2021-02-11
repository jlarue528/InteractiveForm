//Selecting the name input & setting focus state to true
const nameInput = document.querySelector('input[type="text"]');
nameInput.focus();

//Selecting Job Role Select Element
const jobRole = document.getElementById('title');
console.log(jobRole);

//Selecting Other Job Role Element & setting its display style to be hidden
const otherJobRole = document.getElementById('other-job-role');
console.log(otherJobRole);
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





