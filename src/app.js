const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

const slice = function (num1, num2) {
  modifiedFood = [];
  let a = foods.slice(num1, num2);

  return a;
};

// Progression 2:
function spliced() {
  let b = foods.splice(2, 0, 'noodles', 'icecream');

  return foods;
  console.log(foods);
}

// Progression 3:
function checkNumber(numberArray, operation) {
  return operation(numberArray);
}
function isEven(number) {
  let res = number.filter((n) => n % 2 == 0);
  return res;
}

const aaa = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

function isPrime(number) {
  const myPrimeArray = number.filter((element) => aaa(element));
  return myPrimeArray;
}

// Progression 4:
function reject(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return num;
  }
  return false;
}
function nonPrime(number) {
  const PrimeArray = number.filter((element) => reject(element));
  return PrimeArray;
}

// Progression 5:
let isEvenUsingLambda = (number) => isEven(number);
// Progression 6:
function square(n) {
  return n * n;
}
function findSquareOfNumbers(myArray) {
  return myArray.map(square);
}

// Progression 7:

function multiply(myArray) {
  const product = myArray.reduce(function (result, item) {
    return result * item;
  }, 1);
  return product;
}

function sumOfSquares(myArray) {
  let s = myArray.map(square);

  const p = s.reduce(function (result, item) {
    return result + item;
  }, 0);
  return p;
}
