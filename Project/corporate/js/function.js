// a function relates to one particular task
//syntax
// function functions_name
//operations

//functions with parameter
//functions without parameter
//functions with parameter with return type
//functions without parameter with return type
// function average(a, b, c) {
//   let average = (a + b + c) / 3;
//   console.log("average", average);
// }

// average(100, 200, 500);
// average(700, 900, 2);
// average(1000, 300, 5);

// function sum() {

// }
// sum(

// )
// function sum(a, b, c) {

// }
// sum(a,b,c)
// function sum() {
//   console.log("test");
// }
// sum()
// function sum(){
//   return true
// }
// let result = sum()

function sum(){
  let a=10;
  let b=20;
  let c=30;
  let sum = a+b+c;
  console.log(sum);
}
sum();
function sum_with_parameter(a,b,c){
  let sum=a+b+c;
  console.log(sum);
} 
sum_with_parameter(10,10,10);

function sum_with_return(){
  let a=10
  let b=10
  let c=10
  let sum=a+b+c
  return sum
}
let test = sum_with_return()
console.log(test)
function sum_with_parameter_return(a,b,c){
  let sum=a+b+c;
return sum
} 
let addition = sum_with_parameter_return(20,10,10)
console.log(addition)



