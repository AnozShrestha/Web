// let name = "Anoz";
// let occupation = " Student";
// let designation = `Lead `;
// // trim le agadi ra paxadi ko spacelai hatauxa
// console.log(name.length);
// console.log(occupation.length);
// console.log(designation.length);
// console.log(designation.trim().length);
// console.log(occupation.toLowerCase());
// console.log(occupation.toUpperCase());
// console.log(designation.concat(occupation));
// //concat add
// console.log(occupation.charAt(3));
// console.log(designation.includes("Lead"));

//loops

// for loop
// do while
// while

//syntax
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// //WAF to calculate multiplication table of 5
// function multiplicationTable(a) {
//     let root =document.getElementById('root')
//   for (i = 1; i <= 10; i++) {
//     // console.log(`${a} * ${i}=`, a * i);
//     root.innerHTML+=`<p>${a}*${i}=${a*i}</p>`
//   }
// }
// multiplicationTable(5);
// multiplicationTable(2);

// //WAF to find even numbers from 1 to 100

// function even() {
//   for(i=1;i<=100;i++){
//     if(i%2==0){
//       console.log("even number", i)
//     }
//   }
// }
// even()

// let text = "Hello World"
// console.log(text.length)
// console.log(text[text.length - 1])

// let alpha = "Goodbye World"
// for(let i = 0; i <= alpha.length-1;i++){
//   if(i%2==0){
//     console.log(alpha[i].toUpperCase())
//   }else{
//     console.log(alpha[i].toLowerCase())
//   }
// }

// for(let i = 0; i <= alpha.length-1;i++){
//   console.log(alpha[i])
// }

//WAF to count the number of spaces in a spaces

function countSpace(sentence) {
  let count = 0
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] === " ") {
    count =count+1}
  }console.log('Number of spaces',count)
  return count
}

countSpace('lorem ipsum is greater for calculating spaces.')


//WAF to count the number of words in a sentence.

function countWord(sentence) {
  let spaceCount=countSpace(sentence)
  let wordCount=spaceCount+1
  console.log('Word Count',wordCount)
}
countWord('lorem ipsum is greater for calculating spaces.')

//WAF to count the number of any given characters

function countCharacter(sentence="This is a dummy sentence",character=" ") {
  let count = 0
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] === character) {
    count =count+1}
  }console.log('count',count)
  return count
}

countCharacter('lorem ipsum is greater for calculating spaces.')
countCharacter('lorem ipsum is greater for calculating spaces.',"p")
countCharacter('lorem ipsum is greater for calculating spaces.',"r")
