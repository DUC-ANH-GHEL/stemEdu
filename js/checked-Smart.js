var PartA = document.getElementsByClassName('PartA');
var PartB = document.getElementsByClassName('PartB');
var PartC = document.getElementsByClassName('PartC');
var PartD = document.getElementsByClassName('PartD');
var PartE = document.getElementsByClassName('PartE');
var PartF = document.getElementsByClassName('PartF');
var PartG = document.getElementsByClassName('PartG');
var PartH = document.getElementsByClassName('PartH');
var PartI = document.getElementsByClassName('PartI');
var radios = document.getElementsByClassName('sizeRadio');
var buttonFinish = document.getElementById('finish');
buttonFinish.disabled = true;

function CheckRadio() {
    var count = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            count++;
        }
    }
    console.log(count);
    if (count == 90) {
        buttonFinish.disabled = false;
    } else {
        buttonFinish.disabled = true;
    }
}

function BtnFinish() {
    CheckedRadio();
}


function CheckedRadio() {
    var sumA = 0;
    var sumB = 0;
    var sumC = 0;
    var sumD = 0;
    var sumE = 0;
    var sumF = 0;
    var sumG = 0;
    var sumH = 0;
    var sumI = 0;
    for (var i = 0; i < PartA.length; i++) {
        if (PartA[i].checked) {
            sumA = sumA + parseInt(PartA[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartB.length; i++) {
        if (PartB[i].checked) {
            sumB = sumB + parseInt(PartB[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartC.length; i++) {
        if (PartC[i].checked) {
            sumC = sumC + parseInt(PartC[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartD.length; i++) {
        if (PartD[i].checked) {
            sumD = sumD + parseInt(PartD[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartE.length; i++) {
        if (PartE[i].checked) {
            sumE = sumE + parseInt(PartE[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartF.length; i++) {
        if (PartF[i].checked) {
            sumF = sumF + parseInt(PartF[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartG.length; i++) {
        if (PartG[i].checked) {
            sumG = sumG + parseInt(PartG[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartH.length; i++) {
        if (PartH[i].checked) {
            sumH = sumH + parseInt(PartH[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    for (var i = 0; i < PartI.length; i++) {
        if (PartI[i].checked) {
            sumI = sumI + parseInt(PartI[i].value);
            // console.log(i + "point" + PartA[i].value);
        }
    }
    window.location.href = "/smart/result?_result=" + sumA + "+" + sumB + "+" + sumC + "+" + sumD + "+" + sumE + "+" + sumF + "+" + sumG + "+" + sumH + "+" + sumI;
    // console.log(sumA);
}