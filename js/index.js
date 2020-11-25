var firstNumber = document.querySelector('#first_number');
var secondNumber = document.querySelector('#second_number');

var sumAB = document.querySelector('#sum_a_b');
var subAB = document.querySelector('#sub_a_b');
var subBA = document.querySelector('#sub_b_a');
var mulAB = document.querySelector('#mul_a_b');
var divAB = document.querySelector('#div_a_b');
var divBA = document.querySelector('#div_b_a');
var squareA = document.querySelector('#quadrado_a');
var squareB = document.querySelector('#quadrado_b');
var divisorsA = document.querySelector('#divisores_a');
var divisorsB = document.querySelector('#divisores_b');
var factorialA = document.querySelector('#factorial_a');
var factorialB = document.querySelector('#factorial_b');

firstNumber.addEventListener('keyup', calculates);
secondNumber.addEventListener('keyup', calculates);

function calculates() {
  var a = parseInt(firstNumber.value, 10);
  var b = parseInt(secondNumber.value, 10);

  sumAB.value = a + b;
  subAB.value = a - b;
  subBA.value = b - a;
  mulAB.value = a * b;
  divAB.value = division(a, b);
  divBA.value = division(b, a);
  squareA.value = a ** 2;
  squareB.value = b ** 2;
  divisorsA.value = divisors(a);
  divisorsB.value = divisors(b);
  factorialA.value = factorial(a);
  factorialB.value = factorial(b);

  function formatNumber(number) {
    return new Intl.NumberFormat('pt-BR').format(number.toFixed(2));
  }

  function division(a, b) {
    if (b === 0) {
      return 'Divisão por 0';
    } else {
      return formatNumber(a / b);
    }
  }

  function divisors(number) {
    var result = [];

    for (var i = 1; i <= number; i++) {
      if (number % i === 0) {
        result.push(i);
      }
    }

    return result.join(', ') + ' (' + result.length + ')';
  }

  function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
}
