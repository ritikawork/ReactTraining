console.log("Hello Typescript");

function squareOf(n:number) {
    return n *n;
}
console.log(squareOf(2));

//Any
let a:any = 456;
let b:any = "str";
//a = "sgfg"

let c:unknown = 30;
console.log(c); //30

if (typeof c === 'number') {
    console.log(c + 10) //40

}

let b1 = {
    c : {
        d : 'f'
    }
}
console.log(b1.c.d); //f

let c1 : {
    firstName: string,
    lastName: string
} = {
    firstName : 'john',
    lastName : 'Williams'
}

class Person {
    constructor(
        public firstName : string,
        public lastName : string
        ) {

        }
}

c1 = new Person('Ritika', 'Gupta');

let a1: {
    b:number,
    c? :string,
    [key:number]:boolean
}
 a1 = {b : 1};
 a1 = {b : 1, c: undefined}
 a1 = {b : 1, c: "abc"}
 a1 = {b :1, 10:true}
 a1 = {b :1, 10:true, 20:false,30:true}

 let user: {
    readonly firstname : string
 } = {
    firstname : 'abby'

 }
// user.firstname = "sunny" // error
 console.log(user.firstname)

type Age = number;

type Person1 = {
    name :string
    age : Age
}

let age:Age = 25;
let driver: Person1 =  {
    name : 'James',
    age: age
}

//Union Types and Intersection Types

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog =  Cat & Dog

//Cat
let a3: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true
}
//Dog
let a4: CatOrDogOrBoth = {
    name: "Bonkers",
    barks: true,
    wags: false
}
//BOTH
let a5: CatOrDogOrBoth = {
    name: "Bonkers",
    purrs: true,
    barks: true,
    wags: false
}

let a6: CatAndDog = {
    name: "Bonkers",
    purrs: true,
    barks: true,
    wags: false
}

//Arrays

let arr1 = [1, 2 ,3];
//arr1.push("str"); //error because array is number type
arr1.push(4);

var arr2 = ["a", "b"];
//arr2.push(4); //error because array is string type
arr2.push('c');

let arr3: (string | number | boolean)[] = ["a", 1,true];

let arr4 = [];
arr4.push(5);
arr4.push("a");
arr4.push(true);

//Tuples
let tupl1: [number] = [1];
let tupl2: [number,string] = [1,'str'];


