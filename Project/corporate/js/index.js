// // Data types
// // Number 0-9
// // String "Hello World '' "" `` //literal or template string
// // Boolean true or false
// // Array //collection[]
// // Object // key value pair{}
// // Undefined
// // null // define gareko xa tara value xaina
// // nan // not a number

// // const
// // var
// // reserve words let class const

// // let a ="Hello world";
// // let b ="Goodbye"
// // let c =123;
// // let d = true
// // let e = a + b

// // console.log(a);
// // console.warn(b);
// // console.error(c);
// // console.log(d);
// // console.log(e);

// // let test = "123"
// // console.log(c + test);

// // let a =10
// // let b =12
// // let sum = a+b;
// // let sub=a-b;
// // let multi=a*b;
// // let div =a/b;
// // let mod=a%b;

// // console.log("sum",sum);
// // console.log("sub",sub);
// // console.log("multiplication", multi);
// // console.log("divison", div);
// // console.log("modulus", mod);
// // console.log("average", (a+b)/2);

// // let locations = "Kathmandu";
// // console.log("I live in" +" "+ locations);
// // console.log(`I live in ${locations}`)

// // console.log(typeof locations);
// // console.log(typeof sub);

// // arithmetic operators
// // + - * / %

// // conditional operators
// // > < == >= <= ? always gives boolean value : true or false

// // let a = 10;
// // let b = 12;
// // console.log(a>b, "Greater than");
// // console.log(a<b, "Less than" );
// // console.log(a>=b, "Greater than equals to");
// // console.log(a<=b, "Less than equals to");
// // console.log(a==b, "Equals");
// // console.log(a===b, "equal value with type");

// // let c = 10
// // let d = "10"

// // console.log(c==d);
// // console.log(c===d);

// //assignment operator
// //c = d; //c="10"

// //logical operator
// // && || !
// // and or not
// // 2 2 2

// // value 1      value 2     result
// // true         false       false
// // false        true        false
// // false        false       false
// // true         true        true

// console.log('**** and gate*****')
// console.log(true && false); //false
// console.log( false && true); //false
// console.log(false && false); //false
// console.log( true && true); //true

// console.log('**** or gate*****')
// console.log(true || false); //true
// console.log( false || true); //true
// console.log(false || false); //false
// console.log( true || true); //false

// console.log('**** not gate*****')
// console.log(! false); //true
// console.log(! true); //false

// //conditional statements
// let first = 100;
// let second = 200;
// if (first > second){
//     console.log('first is greater', first);
// }else{
//     console.log('second is greater', second);
// }
// if (first < second){
//     console.log('second is greater', second );
// }

// // program to find if the given number is even or odd

// if(first %2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// // WAP to find if given number is divisible by 5 or not

// if(first %5 == 0){
//     console.log("divisible by 5");
// }else{
//     console.log("not divisible by 5");
// }

// // WAP to find given number is divisible by 5 and 7.

// if(second %5 == 0 &&  second %7 ==0){
//     console.log("divisible by 5 and 7");
// }else{
//     console.log("not divisible by 5 and 7");
// }

// //WAP number divisible by 9 and 15.

// // if(second %9 == 0 && second %15 == 0){
// //     console.log('divisible by 9 and 15');
// // }else{
// //     console.log("not divisible by 9 and 15")
// // }

// //ternary operatorsrs
let a = 12;
if (a % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

//syntax: condition ? true operation : false operation
a % 2 == 0 ? console.log("even") : console.log("odd");

a % 2 == 0 && a > 0 ? console.log("even") : console.log("odd");

a % 2 == 0
  ? a > 0
    ? console.log("positive")
    : console.log(negative)
  : console.log("odd");

// switch statements
let day = 1;
if ((day = 1)) {
  console.log("Sunday");
} else if ((day = 2)) {
  console.log("Monday");
} else if ((day = 3)) {
  console.log("Tuesday");
} else if ((day = 4)) {
  console.log("Wednesday");
} else if ((day = 5)) {
  console.log("Thursday");
} else if ((day = 6)) {
  console.log("Friday");
} else if ((day = 7)) {
  console.log("Saturday");
} else {
  console.log("Invalid week day");
}

switch (day) {
  case 1:
    console.log("Sunday")
    break;
  case 2:
    console.log("Monday")
    break;
  case 3:
    console.log("Tuesday")
    break;
  case 4:
    console.log("Wednesday")
    break;
  case 5:
    console.log("Thursday")
    break;
  case 6:
    console.log("Friday");
    break
  case 7:
    console.log("Saturday")
    break;
  default:
    console.log("Invalid Week");
}
