let commentForm = document.querySelector ('.comment-form');
let commentField = document.querySelector ('.comment-field');
let charCounter = document.querySelector ('.char-counter');
let submitButton = document.querySelector ('.submit-button');
var progressCounter = document.querySelector ('span.progress-counter .text-progress');
var maxlengthValue = document.getElementById('comment-textarea');

commentField.oninput = function () { 
    maxlengthValue.getAttribute('maxlength', 'value');
    charCounter.textContent = commentField.value.length;
    progressCounter.style.setProperty('--element-width', charCounter.textContent + '%');
    if (charCounter.textContent > maxlengthValue.textContent){
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
       
    }
    };

submitButton.onclick = function (){
    commentField.value = '';
    charCounter.textContent = 0;
    progressCounter.style.setProperty('--element-width', 0 + '%');
}




//getComputedStyle(ссылкаНаЭлемент).getPropertyValue('--моя-переменная').




