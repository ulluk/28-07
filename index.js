const form = document.querySelector('#form');

const createErrorElem = () => {
    const elem = document.createElement('p');
    elem.className = "text-error";
    elem.innerText = "Обязательное поле!";
    return elem;
}

const removeElem = () => {
    const elem = document.querySelectorAll('.text-error')
    for (let i = 0; i < elem.length; i++) {
        elem.target.remove();
    }
}

const checkElem = (event) => {
    if (event.target.value !== '') {
        event.target.classList.remove('empty-field')
        event.target.nextElementSibling.remove()
    }
}

form.addEventListener("submit", () => {
    const elements = document.querySelectorAll('#form input,#form select,#form textarea');
    removeElem();
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute("data-required")) {
            if (elements[i].value === '') {
                elements[i].classList.add('empty-field');
                elements[i].after(createErrorElem());
                elements[i].addEventListener('change', checkElem);
            }
        }
    }

})