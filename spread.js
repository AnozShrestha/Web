// spread operator


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

let employee={
    ...person,
    employeeId:121,
    skills:[...person.skills,"DevOps"]
}
console.log(employee)

let car={
    brand:'ford',
    model:'automatic',
}
let combine={...person,...car}
console.log(combine)
