//WAF that calculates the factorial of a given number

//WAF that calculates the sum of given array of numbers

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const number = [1, 2, 3, 4, 5];
const total = sumArray(number);
console.log(total);

//WAF that calculates given array of number is greater than 5 or not
function numberGreater(arr) {
  if (!Array.isArray(arr)) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 5) {
      return false;
    }
  }
  return true;
}
const num1 = [6, 7, 8, 9];
const num2 = [1, 2, 3, 10];
console.log(numberGreater(num1));
console.log(numberGreater(num2));

//WAF that counts number of vowels in a given array of string

const countVowels = (arr) => {
  let vowels = 0;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (
        arr[i][j] === "a" ||
        arr[i][j] === "e" ||
        arr[i][j] === "i" ||
        arr[i][j] === "o" ||
        arr[i][j] === "u"
      ) {
        vowels = vowels + 1;
      }
    }
  }

  console.log(vowels, "vowels");
};

countVowels(["apple", "hello", "good"]);

//WAF that returns number greater than 100 less than 200

// function givenNumberIsBetween100and200(number) {
//   return number > 100 && number < 200;
// }
// console.log(givenNumberIsBetween100and200(300));
// console.log(givenNumberIsBetween100and200(150));

const between100to200 = () => {
  for (i > 100; i < 200; i++) {
    console.log(i);
  }
};
between100to200();

//WAF that counts length of the object
// function objectLength(obj) {
//   return Object.keys(obj).length;
// }
// const myObject = {
//   a: 1,
//   b: 2,
//   c: 3,
//};
//console.log(objectLength(myObject));

const person = {
  name: "john",
  age: 29,
  status: "employed",
};
const countObjectLength = (obj) => {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
  const length = Object.entries(obj).length;
  console.log(length);
};

countObjectLength(person);


//WAF that identifies if given number is prime or not
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
console.log(isPrime(15));
console.log(isPrime(7));

//WAF that checks if every elements of the given array is boolean or not

//WAF that finds a element based on given index
function elementByIndex(index, array) {
  if (index < 0 || index >= array.length) {
    return null;
  }
  return array[index];
}
let item = ["apple", "banana", "cherry", "mango"];
let element = elementByIndex(3, item);
console.log(element);

//WAF that finds matching elements based on search result
