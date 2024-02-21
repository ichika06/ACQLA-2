//GLOBAL 
const button = document.getElementById('Log-btn');
const img = document.getElementById('imgbtn');
const logContainer = document.getElementById('Log-container');9
const clearbtn = document.getElementById("clear_btn");
const unitname = document.getElementById('Inputname');
const sub = document.getElementById('inputsection');
const sub_prof = document.getElementById('prof-select');
const course_select = document.getElementById('course-select');

const defaultbtn = 'https://img.icons8.com/ios/50/user-menu-male.png';

button.addEventListener('click', function() {
  if (img.src === defaultbtn) {
    img.src = 'https://img.icons8.com/ios-filled/50/user-menu-male.png';
  } else {
    img.src = defaultbtn;
  }
  
  logContainer.classList.toggle('show');
});

//LOG CONTAINER-------------------------------------------------------

document.getElementById('submit').addEventListener('click', function() {
  const selectedTableId = `r-${unitnumber.value}`;
  const selectedTableElement = document.getElementById(selectedTableId);
  
  if (selectedTableElement) {
    const DateTime = new Date();
    const formatTimestamp = " -- " + DateTime.toLocaleTimeString();
    const unitname = document.getElementById('Inputname').value
    const sub = document.getElementById('inputsection').value;
    const sub_prof = document.getElementById('prof-select').value;
    const course_select = document.getElementById('course-select').value;

    const timestampSpan = selectedTableElement.querySelector('span');
    const tableDetailsP = selectedTableElement.querySelector('p');

    timestampSpan.textContent = formatTimestamp;
    tableDetailsP.textContent = `${unitname} ${sub} ${course_select} ${sub_prof}`;
  }
});



clearbtn.addEventListener('click', function(){
  unitname.value="";
  sub.value="";
  sub_prof.selectedIndex = 0;
  course_select.selectedIndex = 0;
})