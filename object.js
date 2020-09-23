let p1 ={name : "Hong", age:30}

class Person{
    constructor(name,age){
        this._name = name; // _:private를 의미
        this._age = age;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }
}

let p2 = new Person("Park",30);
p2.name = "Choi";
p2.age = 25;
console.log(`name: ${p2.name} age: ${p2.age}`);

let p3 = new Person("Kim", 22);

function Student(name, grade,age){
    this._name = name;
    this._grade = grade;
    this._age = age;
}

let s1 = Student("Park", 3, 10);
let s2 = Student("Hong", 4, 11);
let s3 = Student("Hwang", 5, 12);

