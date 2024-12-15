class User {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`${this.name} greets ${this.age}`);
    }
}

let user = new User("Raju",19);
console.log(user.name);
console.log(user.age);

user.greet();


const names = ["Raju", "Avinaash"];
console.log(names);

names.push("hey","ok");
console.log(names);

console.log(names.pop())

let index = names.findIndex(item => item === "Avinaash"
)

console.log(index);

const newNames = names.map((name) => {
    return name + "!!";
})

console.log(newNames);
console.log(names);

const [name1,name2] = names;

console.log(name1,name2);

const person = {
    name : "Max",
    age : 19
};

const {name:userName, age: userAge} = person;

console.log(userName,userAge);
