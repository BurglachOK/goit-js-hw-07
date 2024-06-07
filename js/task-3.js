const inputNameElem = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputNameElem.addEventListener('input', oninputNameInput);
function oninputNameInput() {

    const inputValue = inputNameElem.value.trim();

    if (inputValue) {
        outputName.textContent = inputValue;
    } else {
        outputName.textContent = 'Anonymous';
    }
}