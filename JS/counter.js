let commentForm = document.querySelector ('.comment-form');
let commentField = document.querySelector ('.comment-field');
let charCounter = document.querySelector ('.char-counter');
let submitButton = document.querySelector ('.submit-button');
var progressCounter = document.querySelector ('span.progress-counter .text-progress');

    commentField.oninput = function () { 
    charCounter.textContent = commentField.value.length;
    progressCounter.style.setProperty('--element-width', charCounter.textContent + '%');
};


//getComputedStyle(ссылкаНаЭлемент).getPropertyValue('--моя-переменная').




