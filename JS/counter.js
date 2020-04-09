let commentField = document.querySelector ('.comment-field');
let charCounter = document.querySelector ('.char-counter');
let submitButton = document.querySelector ('.submit-button');
var progressCounter = document.querySelector ('span.progress-counter .text-progress');
var maxlengthValue = document.getElementById('comment-textarea');
let input = document.querySelector('.text');


commentField.oninput = function (){ 
    maxlengthValue.getAttribute('maxLength', 'value');
    charCounter.textContent = commentField.value.length;
    progressCounter.style.setProperty('--element-width', charCounter.textContent + '%');
    input.getAttribute('placeholder', 'value');
    input = input.placeholder = maxlengthValue.maxLength;
        if (charCounter.textContent <= maxlengthValue.maxLength ){
            submitButton.disabled = false;
        }  else {
            commentField.disabled = true;
        }
};

submitButton.onclick = function (){
    if (charCounter.textContent == 0 ){
        submitButton.disabled = true;
    } else {
        commentField.value = '';
        charCounter.textContent = 0;
        progressCounter.style.setProperty('--element-width', 0 + '%');
    }
}






//getComputedStyle(ссылкаНаЭлемент).getPropertyValue('--моя-переменная').




