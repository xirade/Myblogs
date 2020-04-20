if (window.localStorage) {
    var elements = document.querySelectorAll('[name]');

    for (var i = 0, length = elements.length; i < length; i++) {
        (function(element) {
            var name = element.getAttribute('name');

            element.value = localStorage.getItem(name) || element.value;

            element.onkeyup = function() {
                localStorage.setItem(name, element.value);
            };
        })(elements[i]);
    }
}