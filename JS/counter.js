let commentField = document.querySelector ('.comment-field');
let charCounter = document.querySelector ('.char-counter');
let submitButton = document.querySelector ('.submit-button');
var progressCounter = document.querySelector ('span.progress-counter .text-progress');
var maxlengthValue = document.getElementById('comment-textarea');

commentField.oninput = function () { 
    var maxValue;
    maxValue = maxlengthValue.getAttribute('maxlength', 'value');
    charCounter.textContent = commentField.value.length;
        if (charCounter.textContent > 0 ){
            submitButton.disabled = false;
        }  
    progressCounter.style.setProperty('--element-width', charCounter.textContent + '%');
        charCounter.addEventListener('keydown', function(event){
            if (charCounter.textContent > maxValue){
                event.preventDefault ();
         }
        })
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




