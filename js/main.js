import { Operator } from "./operator.js"

let operator = new Operator();

var x, y, operatorAction, equalsButton, total, messageArea, resetButton;

x = document.querySelector('#x');
operatorAction = document.querySelector('#operatorAction');
y = document.querySelector('#y');
equalsButton = document.querySelector('#equals-button');
total = document.querySelector('#total');
messageArea = document.querySelector('#message-area');
resetButton = document.querySelector('#reset-button');

equalsButton.addEventListener('click', function(e) {
    if (x.value !== '' && x.value !== null && x.value !== undefined && y.value !== '' && y.value !== null && y.value !== undefined ) {
        console.log('TRUE');
        if(operatorAction.value === 'add') {
            total.value = operator.addNumbers(x.value,y.value);
        } else if(operatorAction.value === 'subtract') {
            total.value = operator.subtractNumbers(x.value,y.value);
        } else if(operatorAction.value === 'multiply') {
            total.value = operator.multiplyNumbers(x.value,y.value);
        } else if(operatorAction.value === 'divide') {
            total.value = operator.divideNumbers(x.value,y.value);
        } else {
            console.log('FALSE... ummm... what?');
        }
    } else {
        console.log('FALSE');
        messageArea.classList.add('text-danger','p-2');
        messageArea.innerHTML = 'Please fill in numbers in the x and y fields';
    }
});

resetButton.addEventListener('click', function() {
    resetForm();
});

function resetForm() {
    messageArea.innerHTML = '';
    messageArea.classList.remove('text-danger','p-2');
    x.focus();
}
