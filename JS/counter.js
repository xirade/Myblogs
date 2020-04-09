let commentField = document.querySelector ('.comment-field');
let charCounter = document.querySelector ('.char-counter');
let submitButton = document.querySelector ('.submit-button');
var progressCounter = document.querySelector ('span.progress-counter .text-progress');
var maxlengthValue = document.getElementById('comment-textarea');

commentField.oninput = function (){ 
    var maxValue;
    maxValue = maxlengthValue.getAttribute('maxlength', 'value');
    charCounter.textContent = commentField.value.length;
        if (charCounter.textContent > 0 ){
            submitButton.disabled = false;
        }  
    progressCounter.style.setProperty('--element-width', charCounter.textContent + '%');
        $('.text').on('textarea', function() {
            if (charCounter.textContent > maxValue){
                $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё0-9]/, ''))
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




