window.addEventListener('DOMContentLoaded', function () {

    
    let submitBtn = document.querySelector('.form-submit'),
        input = document.querySelector('.form-input'),
        formText = document.querySelector('.form-text'),
        boxes = document.querySelectorAll('.box'),
        eventListener = function(event) {
            let value = input.value;

            if (value) {
                event.preventDefault();
                formText.innerHTML = `<p class="form-text-span"> Домен ${value} — свободен. <span class="form-text-link">Зарегистрировать за 39₽</span> </p>`;
            } else {
                formText.innerHTML = '';
            }
            

        };
    submitBtn.addEventListener('click', eventListener);

    let items = document.querySelectorAll('.content-item');
        
    items.forEach(function(element, index){
        element.addEventListener('click', function() {
            showText(index);
            hideBoxes(index);
        })
    });
        
    let showText = function(index) {
        let box = document.getElementById('box' + index);        
        if (box.style.display == 'none' || box.style.display == '') {
        box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }        
    };

    let hideBoxes = function(boxIndex) {
        boxes.forEach(function(element, index) {
            if (boxIndex != index) {
                element.style.display = 'none';
            }
        })
    };

});