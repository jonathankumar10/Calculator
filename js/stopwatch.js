var seconds = 00;
var minutes = 00;
var hours = 00;
var displayseconds = 00;
var displayminutes = 00;
var displayhours = 00;
var appendseconds = document.getElementById('seconds');
var appendhours = document.getElementById('hours');
var appendminutes = document.getElementById('minutes');
var buttonstart = document.getElementById('start');
var buttonstop = document.getElementById('stop');
var buttonreset = document.getElementById('reset');

function stopwatch() {
    seconds++;

    if ((seconds / 60) == 1) {
        minutes++;
        seconds = 0;

        if ((minutes / 60) == 1) {
            hours++;
            minutes = 0;
        }
    }

    if (seconds < 10) {
        displayseconds = "0" + seconds.toString();
    }
    else {
        displayseconds = seconds;
    }
    if (minutes < 10) {
        displayminutes = "0" + minutes.toString();
    }
    else {
        displayminutes = minutes;
    }
    if (hours < 10) {
        displayhours = "0" + hours.toString();
    }
    else {
        displayhours = hours;
    }

    appendhours.innerHtml = displayhours;
    appendminutes.innerHTML = displayminutes;
    appendseconds.innerHTML = displayseconds;
}

buttonstart.onclick = function () {
    interval = window.setInterval(stopwatch, 1000);
}

buttonstop.onclick = function () {
    window.clearInterval(interval);
}

buttonreset.onclick = function () {
    window.clearInterval(interval);
    hours = 00;
    minutes = 00;
    seconds = 00;
    displayseconds = "00";
    displayminutes = "00";
    displayhours = "00";
    appendhours.innerHtml = displayhours;
    appendminutes.innerHTML = displayminutes;
    appendseconds.innerHTML = displayseconds;
}

function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle.className == "topnav") {
        navbarToggle.className += ' responsive';
    }
    else {
        navbarToggle.className = 'topnav';
    }
}