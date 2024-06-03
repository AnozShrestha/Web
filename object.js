//syntax
//let object name = {
    // key1:"value"
    //key2:true
    //key3:["array","fruit"]
//}

let car={
    name:'mustang',
    brand:"Ford" ,
    model:2024,
    type:"sports"
}

console.log(car.name)
console.log(car.brand)
console.log(car.model)
console.log(car.type)


//create a object called person which has following properties name, age, gender, qualification, skills, maritalStatus
let person={
    name:'John',
    age:25,
    gender:'male',
    qualification:'masters',
    skills:['frontend','backend'],
    maritalStatus:'unmarried'
}
console.log(person.name)
console.log(person.age)
console.log(person.gender)
console.log(person.qualification)
console.log(person.skills)
console.log(person.maritalStatus)





//create a object called animal, house, laptop, mobile, weather

let animal={
    name:'tiger',
    age:2,
    gender:'male',
    breed:'bengal_tiger'

}
console.log(animal.name)
console.log(animal.age)
console.log(animal.gender)
console.log(animal.breed)


let house={
    location:"nepal",
    floor:2,
    type:'cottage',
    room:5,
    
}
console.log(house.location)
console.log(house.floor)
console.log(house.type)
console.log(house.room)


let laptop={
    name:'mac book',
    brand:'apple',
    color:'black',
    model:'m2pro',
}
console.log(laptop.name)
console.log(laptop.brand)
console.log(laptop.color)
console.log(laptop.model)

let mobile={
    name:'iphone',
    brand:'apple',
    color:'black',
    model:'15 pro max',
}
console.log(mobile.name)
console.log(mobile.brand)
console.log(mobile.color)
console.log(mobile.model)

let weather={
    humidity:'high',
    temperature:'25 deg',
    wind:'8 km/h',
    airQuality:'poor',
}

console.log(weather.humidity)
console.log(weather.temperature)
console.log(weather.wind)
console.log(weather.airQuality)



//npm- node package manager 


let combine={...person,...car}
console.log(combine)