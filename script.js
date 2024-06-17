// Add your script below this line, but above the next comment!

const timeDiv = document.getElementById('time');
const timeBtn = document.getElementById('timeCheckBtn');
let timeoutId = 0;

function clearDateAndTime() {
 timeDiv.innerText = '';
}

function displayDateAndTime() {
  timeDiv.innerText = Date();
  clearTimeout(timeoutId)
  timeoutId = setTimeout(clearDateAndTime, 5000);
}

function getBtnAndShow() {
  timeBtn.addEventListener('click', displayDateAndTime);
}


getBtnAndShow();

// This export is to enable testing of your two testable primary functions.
// PLEASE DO NOT EDIT below this line!!!

module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;
