import { Operator } from "./operator.js"

let operator = new Operator();

var x, y, equalsButton, total, messageArea, resetButton;

x = document.querySelector('#x');
operator = document.querySelector('#operator');
y = document.querySelector('#y');
equalsButton = document.querySelector('#equals-button');
total = document.querySelector('#total');
messageArea = document.querySelector('#message-area');
resetButton = document.querySelector('#reset-button');

equalsButton.addEventListener('click', function(e) {
    if (x.value !== '' && x.value !== null && x.value !== undefined && y.value !== '' && y.value !== null && y.value !== undefined ) {
        console.log('TRUE');
        console.log(x.value);
        console.log(y.value);
        let xValue = x.value;
        let yValue = y.value;
        resetForm(e);
        if(operator.value === 'add') {
            console.log('add');
            total.value = add(xValue,yValue);
        } else if(operator.value === 'subtract') {
            total.value = subtract(xValue,yValue);
        } else if(operator.value === 'multiply') {
            total.value = multiply(xValue,yValue);
        } else if(operator.value === 'divide') {
            total.value = divide(xValue,yValue);
        } else {
            console.log('ummm... what?');
        }
    } else {
        console.log('FALSE');
        messageArea.classList.add('text-danger','p-2');
        messageArea.innerHTML = 'Please fill in numbers in the x and y fields';
    }
});

resetButton.addEventListener('click', function(e) {
    resetForm(e);
});

function resetForm(e) {
    messageArea.innerHTML = '';
    messageArea.classList.remove('text-danger','p-2');
}

function add(a,b) {
    console.log(Number(a) + Number(b));
    return Number(a) + Number(b);
};

function subtract(a,b) {
    console.log(Number(a) - Number(b));
    return Number(a) - Number(b);
};

function multiply(a,b) {
    console.log(Number(a) * Number(b));
    return Number(a) * Number(b);
};

function divide(a,b) {
    console.log(Number(a) / Number(b));
    return Number(a) / Number(b);
};
