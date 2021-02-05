// Simple Calc
function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle.className == "topnav") {
        navbarToggle.className += ' responsive';
    }
    else {
        navbarToggle.className = 'topnav';
    }
}

function getHistory() {
    return document.getElementById("historyvalue").innerText;
}

function printHistory(num) {
    document.getElementById("historyvalue").innerText = num;
}
function getOutput() {
    return document.getElementById("outputvalue").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("outputvalue").innerText = num;
    }
    else {
        document.getElementById("outputvalue").innerText = getFormatted(num);
    }

}

function getFormatted(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}


function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName('operator');

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                return printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}


var number = document.getElementsByClassName('number');

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output = output + this.id;
            return printOutput(output);
        }
    })
}

