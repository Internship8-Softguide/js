// let john = {
//     name: "John",
//     age: 40,
//     job: () => console.log("hit man")
// }





// let arrObj = [{ name: "john", age: 45 }, { name: "cavin", age: 20 }, { name: "sam", age: 45 }, { name: "john", age: 40 }]

// arrObj.sort((previous, next) => previous.age - next.age)


// // let agePersons = arrObj.filter((person) => person.age > 30)
// let findPersons = arrObj.find((person) => person.name === "john" && person.age === 45)


// // console.log(agePersons)
// console.log(findPersons)

class Person {
    salary = 400000;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Engineer extends Person {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    job() {
        console.log("we bulid building")
    }
}

let person1 = new Person("john", 45);
let engineer = new Engineer("calvin", 33);

console.log(engineer.salary)
console.log(engineer.name)
console.log(engineer.age)

