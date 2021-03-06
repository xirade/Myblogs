let commentField = document.querySelector('.comment-field');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');
let inputUser = document.getElementById('textUser');
let inputEmail = document.getElementById('emailUser');
var progressCounter = document.getElementById('counter');
var maxlengthValue = document.getElementById('textarea');
var minlengthValue = document.getElementById('textarea');

var allValues = false;
maxlengthValue.getAttribute('maxLength', 'value');
minlengthValue.getAttribute('minLength', 'value');
document.getElementById('maxValue').innerHTML = maxlengthValue.maxLength;
document.getElementById('minValue').innerHTML = minlengthValue.minLength;

commentField.oninput = function() {
    charCounter.textContent = commentField.value.length;
    progressCounter.style.width = commentField.value.length + '%';
    if (charCounter.textContent > maxlengthValue.maxLength) {
        submitButton.disabled = true;
        allValues = true;
    } else {
        submitButton.disabled = false;
    }
}

function textAreaMaxLength(obj, varlength) {
    if (varlength == null)
        varlength = 100;
    if (obj.value.length > (varlength - 1)) {
        return false;
    } else
        return true;
}


function xValue(key) {
    if (allValues) {
        var temp = key == 'Backspace';
        if (temp)
            allValues = false;
        return temp;
    }
    return true;
}


submitButton.onclick = function() {
    if (charCounter.textContent == 0) {
        submitButton.disabled = true;
    } else {
        commentField.value = '';
        charCounter.textContent = 0;
        progressCounter.style.width = commentField.value.length + 0 + '%';
    }
}