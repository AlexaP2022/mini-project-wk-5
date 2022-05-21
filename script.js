var displayTimeEl = document.getElementById('time-date');

// display time function from moment.js
function displayTime() {
    var currentTime = moment().format('MMM Do. YYYY hh:mm:ss');
    displayTimeEl.text(currentTime);
}