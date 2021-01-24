// Percentage Calculator


var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');
var xiswhatpercentofy = document.getElementById('xiswhatpercentofy');
var model1 = document.getElementById("model1");
var button1 = document.getElementById('percentbutton1');
var span = document.getElementsByClassName("close")[0];
var resultfield1 = document.getElementById('resultfield1');


var numfield3 = document.getElementById('numfield3');
var numfield4 = document.getElementById('numfield4');
var xiswhatyofwhatnumber = document.getElementById('xiswhatyofwhatnumber');
var model2 = document.getElementById("model2");
var button2 = document.getElementById('percentbutton2');
var resultfield2 = document.getElementById('resultfield2');


var numfield5 = document.getElementById('numfield5');
var numfield6 = document.getElementById('numfield6');
var whatisxpercentofy = document.getElementById('whatisxpercentofy');
var model3 = document.getElementById("model3");
var button3 = document.getElementById('percentbutton3');
var resultfield3 = document.getElementById('resultfield3');

var mycalcfunc1 = function (event) {
    if (!numfield1.value || !numfield2.value) {
        alert('Please enter values for the fields');
    }
    else {
        var x = parseFloat(numfield1.value);
        var y = parseFloat(numfield2.value);

        var result = x / y;
        var percent = result * 100;

        resultfield1.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }

}


button1.onclick = function () {
    model1.style.display = "block";
}

span.onclick = function () {
    model1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == model1) {
        model1.style.display = "none";
    }
}

button2.onclick = function () {
    model2.style.display = "block";
}

span.onclick = function () {
    model2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == model2) {
        model2.style.display = "none";
    }
}

button3.onclick = function () {
    model3.style.display = "block";
}

span.onclick = function () {
    model3.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == model3) {
        model3.style.display = "none";
    }
}

xiswhatpercentofy.addEventListener('submit', mycalcfunc1);

var mycalcfunc2 = function (event) {
    if (!numfield3.value || !numfield4.value) {
        alert('Please enter values for the fields');
    }
    else {
        var x = parseFloat(numfield3.value);
        var y = parseFloat(numfield4.value);

        var result = 100 / y
        var percent = result * x;

        resultfield2.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }

}

xiswhatyofwhatnumber.addEventListener('submit', mycalcfunc2);


var mycalcfunc3 = function (event) {
    if (!numfield5.value || !numfield6.value) {
        alert('Please enter values for the fields');
    }
    else {
        var x = parseFloat(numfield5.value);
        var y = parseFloat(numfield6.value);

        var result = x / y
        var percent = result * 100;

        resultfield3.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }

}

whatisxpercentofy.addEventListener('submit', mycalcfunc3);













