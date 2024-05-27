var PartR = document.getElementsByClassName('PartR');
var PartI = document.getElementsByClassName('PartI');
var PartA = document.getElementsByClassName('PartA');
var PartS = document.getElementsByClassName('PartS');
var PartE = document.getElementsByClassName('PartE');
var PartC = document.getElementsByClassName('PartC');
var radios = document.getElementsByClassName('sizeRadio');
var buttonFinish = document.getElementById('finish');
buttonFinish.disabled = true;

function checkRadio() {
    var count = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            count++;
        }
    }
    // console.log(count);
    if (count == 60) {
        buttonFinish.disabled = false;
    } else {
        buttonFinish.disabled = true;
    }
    // console.log(count);
}

function BtnFinish() {
    CheckedRadio();
}


function CheckedRadio() {
    var sumR = 0;
    var sumI = 0;
    var sumA = 0;
    var sumS = 0;
    var sumE = 0;
    var sumC = 0;

    for (var i = 0; i < PartR.length; i++) {
        if (PartR[i].checked) {
            sumR = sumR + parseInt(PartR[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartI.length; i++) {
        if (PartI[i].checked) {
            sumI = sumI + parseInt(PartI[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartA.length; i++) {
        if (PartA[i].checked) {
            sumA = sumA + parseInt(PartA[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartS.length; i++) {
        if (PartS[i].checked) {
            sumS = sumS + parseInt(PartS[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartE.length; i++) {
        if (PartE[i].checked) {
            sumE = sumE + parseInt(PartE[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartC.length; i++) {
        if (PartC[i].checked) {
            sumC = sumC + parseInt(PartC[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    console.log("Phần R: " + sumR);
    console.log("Phần I: " + sumI);
    console.log("Phần A: " + sumA);
    console.log("Phần S: " + sumS);
    console.log("Phần E: " + sumE);
    console.log("Phần C: " + sumC);
    window.location.href = "/exercise/result?_result=" + sumR + "+" + sumI + "+" + sumA + "+" + sumS + "+" + sumE + "+" + sumC;
}