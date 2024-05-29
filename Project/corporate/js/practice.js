// WAF to find if given number is even or odd

function isEvenOdd(a){
    if(a%2 == 0){
        console.log('Odd',a)
    }else{
        console.log('Even',a)
    }
}
isEvenOdd(10)
isEvenOdd(12)
isEvenOdd(11)


// WAF to find the largest number among three numbers 

function largest(a,b,c){
    
    if(a>b && a>c){
            console.log('Largest',a)
    }else if(b>a && b>c){
        console.log('Largest',b)
    }else{
        console.log('Largest',c)
    }
}
largest(10,20,30)
largest(20,30,40)

function largest(a,b,c){
    
    if(a>b && a>c){
            return a
    }else if(b>a && b>c){
       return b
    }else{
        return c
    }
}
const large=largest(100,200,300)
console.log('largest number', large)


//WAF to find if the given number  is divisible by 5 and is even
 function number(a){
    if(a%5==0 && a%2==0){
        console.log("Is divisible by 5 and even",a)
    }else{
        console.log("Is not divisible by 5 and even",a)
    }
 }
number(10)
number(12)
number(13)






   
