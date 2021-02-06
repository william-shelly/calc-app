export class Operator {
// class Operator {

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

To perform test with JEST.

npm run test

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

    operators = [];

    constructor(x, y, action, total) {
        this.x = x;
        this.y = y;
        this.action = action;
        this.total = total;
    }

    addNumbers(x,y) {
        console.log(Number(x) + Number(y));
        console.log('add method');
        return Number(x) + Number(y);
    };
    subtractNumbers(x,y) {
        console.log(Number(x) - Number(y));
        console.log('subtract method');
        return Number(x) - Number(y);
    };
    multiplyNumbers(x,y) {
        console.log(Number(x) * Number(y));
        console.log('multiply method');
        return Number(x) * Number(y);
    };

    divideNumbers(x,y) {
        console.log(Number(x) / Number(y));
        console.log('divide method');
        return Number(x) / Number(y);
    };
}

// module.exports = Operator;
