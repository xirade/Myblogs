let themeButton = document.querySelector('.button-theme')
let page = document.querySelector('.page');

themeButton.onclick = function ()
{
    if (themeButton.textContent == 'Dark theme'){
    themeButton.textContent = 'Light theme';
    page.classList = ('dark-theme');
    } else {
        themeButton.textContent = 'Dark theme';
        page.classList = ('');
    }
}