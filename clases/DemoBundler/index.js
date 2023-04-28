const {suma, resta, division, multiplicacion} = require('./funciones');
const {num1, num2} = require('./variables');

const resultado1 = suma(num1, num2);
console.log(resultado1);
const resultado2 = resta(num1, num2);
console.log(resultado2);
const resultado3 = multiplicacion(num1, num2);
console.log(resultado3);
const resultado4 = division(num1, num2);
console.log(resultado4);
