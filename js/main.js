var x, operator, y, equals, total, action;

x = document.querySelector('#x');
operator = document.querySelector('#operator');
y = document.querySelector('#y');
equals = document.querySelector('#equals');
total = document.querySelector('#total');

equals.addEventListener('click', function(e) {
    if (x.value !== '' && x.value !== null && x.value !== undefined && y.value !== '' && y.value !== null && y.value !== undefined ) {
        console.log('TRUE');
        console.log(x.value);
        console.log(y.value);
        let xValue = x.value;
        let yValue = y.value;
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
        /* make a message to say that the input fields are blank */
    }
});

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
