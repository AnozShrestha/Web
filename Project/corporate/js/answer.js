//WAP to find largest amount among three  different number

let num1 = 100;
let num2 = 200;
let num3 = 300;

if(num1 >= num2 && num1 >= num3){
    console.log('largest', 100);
}else if (num2 >= num1 && num2 >=num3){
    console.log("largest", 200);
} else{
    console.log("largest", 300);
}

// find smallest number among three different number

let num4 = 10;
let num5 = 14;
let num6 = 15;

if(num4 <= num5 && num4 <= num5){
    console.log('smallest', 10);
}else if (num5 <= num4 && num5 <=num6){
    console.log("smallest", 14);
} else{console.log("smallest", 15);}


// find day of the week. for eg: value is 1 console "sunday"
let day = 1
if(day = 1){
    console.log('Sunday')
}else if(day = 2){
    console.log('Monday')
}else if(day = 3){
    console.log('Tuesday')
}else if(day = 4){
    console.log('Wednesday')
}else if(day = 5){
    console.log('Thursday')
}else if(day = 6){
    console.log('Friday')
}else if(day = 7){
    console.log('Saturday')
}else{
    console.log('Invalid week day')
}

// calculate average of three numbers

let z = -10
let x = 20
let v = 80

console.log("average", (z+x+v)/3 )


// calculate the percentage of total marks
let mark = 800
let part = 600

console.log("Percentage", (part/mark)*100 + "%")


// find the score of a student. Eg: if under 50 E, under 60 D, under 65 C, under 75 B, under 90 A, above 90+ A
let score = 1
if(score < 50){
    console.log('E')
}else if(score < 60){
    console.log('D')
}else if(score < 65){
    console.log('C')
}else if(score < 75){
    console.log('B')
}else if(score < 90){
    console.log('A')
}else{
    console.log('A+')
}

// find if given number is positive or negative



if(z>=0){
    console.log("positive")
}else{console.log("negative")}

if(x>=0){
    console.log("positive")
}else{console.log("negative")}


// find if average of three number is even or odd
let avg = (10+14+15)/3

 if (avg % 2== 0){
    console.log("it is even")
 }else{
    console.log("it is odd")
 }

// find if given number is positive and even.

let a1 = 20
let a2 = 15
if(a1 % 2 == 0 && a1 > 0){
    console.log("it is positive and even")
}else{
    console.log("it is not positive and even")
}
if(a2 % 2 == 0 && a2 > 0){
    console.log("it is positive and even")
}else{
    console.log("it is not positive and even")
}