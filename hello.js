
console.log("Hello World"); //Hello World

var hello = "Hello "; //var example
console.log(hello); //Hello

let greetCountry = hello + "India"; //let example
console.log(greetCountry); //Hello India

var aditions = 100 + 200;
//aditions = greetCountry;
//greetCountry = aditions;
console.log(aditions); //300

console.log(greetCountry.length);//no of chars in string //11
console.log(greetCountry.split(' ')[0]);//array //Hello

const subStr = greetCountry.substring(0,4);
console.log(subStr); //Hell

const subStr1 = greetCountry.slice(0,5);
console.log(subStr1); //Hello

const charIndex = greetCountry.indexOf("o");
console.log(charIndex); //4

const strLower = greetCountry.toLowerCase()
console.log(strLower); //hello india

const strUpper = greetCountry.toUpperCase();
console.log(strUpper); //HELLO INDIA

console.log(strLower === strUpper); //false

//non-primitive types
let arr1 = [1,2,3];
console.log(arr1[1]); //2

let obj = {x:1, y:2, z:3};
console.log(obj.z); //3

let obj1 = {x:1, y:2, z:{a:10, b:20}};
console.log(obj1.z); //{ a: 10, b: 20 }
console.log(obj1.z.a); //10


let obj2 = {x:1};
let obj3 = {x:1};
console.log(obj2 === obj3); //false due to reference ids pointers
console.log(obj2.x === obj3.x) //true
console.log(typeof(obj2) == typeof(obj3)) //true

//=== used for comparison
let x = 5;
let y = 6;
 console.log(x===y);

 const numStr = 10 + "Objects";
 console.log(numStr); //10Objects

 const multStrNum = "5" * "10";
 console.log(multStrNum); //50

 const multStrNum1 = "5" * "10.5";
 console.log(multStrNum1); //52.5

 const multStrNum2 = "Hello" * "10.5";
 console.log(multStrNum2); //NaN

 console.log("2343566"); //2343566 string type
 console.log(Number(2343566)); //2343566 number type
 console.log(typeof String(2343566)); //string

 //parseFloat to convert to float
 console.log(parseFloat("3.0 number")); // 3.5
 console.log(Number("3.9")); //3.9
 console.log(parseInt("3.9"));  // 3

 function square(n) {
    console.log('Square of 9 is:' + n * n); //Square of 9 is:81
    console.log(`Square of ${n} is: ${n * n}`); //Square of 9 is: 81
    return n * n;

 }
  console.log(square(9));

  if (false) {
    console.log("false statement");
  } else {
    console.log("true statement"); //true statement
  }

  switch(4) {
    case 1: 
     console.log('switch statement 1');
     break;
    case 2: 
     console.log('switch statement 2');
     break;
    case 3: 
     console.log('switch statement 3');
     break;
    default: 
     console.log('switch statement defult'); // this will be executed
     break;
  }


 for (let i=1; i<=10 ;i++) {
    console.log(i);
 }

  let j = 0;
  while(j<=10)
  {
    console.log(j);
    j++;
  }

  let book = {
    "author": "Williams",
    "name": "Javascript",
    "description": "lorem ipsum strings"
  }
  console.log(book["author"]); //Williams
  console.log(book.author); //Williams
  console.log(book); 
  /*{
    author: 'Williams',
    name: 'Javascript',
    description: 'lorem ipsum strings'
  } */

  const strBook = JSON.stringify(book); 
  console.log(strBook); //{"author":"Williams","name":"Javascript","description":"lorem ipsum strings"}
  console.log(typeof(strBook)); //string
  console.log(JSON.parse(strBook));
  /*{
    author: 'Williams',
    name: 'Javascript',
    description: 'lorem ipsum strings'
  } */

  let mixedArr = [1, "str" , 9.5];
  let arr4 = new Array(5, 4, 6, 'abc');

  let arr5 = [1, 2, 3];
  let arr6 = [arr5, 4, 5 ,6];
  console.log(arr6); //[ [ 1, 2, 3 ], 4, 5, 6 ]
  let arr7 = [0, ...arr5, 4, 5 ,6];
  console.log(arr7);
  /*
  [
  0, 1, 2, 3,
  4, 5, 6
] */

console.log(arr7.length);
arr7.push(7);
arr7.push(8);
arr7[9] = 10;
console.log(arr7);
/*
  [
  0, 1, 2, 3, 4,
   5, 6, 7,8, 10
] */

arr7.forEach(element => {
   console.log('element - ' + element); 
});

arr7.map(element => console.log("map element - " + element));

for (const i in arr7) {
    console.log(i);
}

for (const i of arr7) {
    console.log(i);
}

 let names = [6,"ritika", 8.9]
 for (let i of names) {
    console.log(i); 
 }
 let names1 = [x=6, y="ritika", z=8.9];
 let names2 = [x=9, y="gupta", z=10];
 console.log([...names1,...names2]); //[ 6, 'ritika', 8.9, 9, 'gupta', 10 ]
 console.log(names1["x"]);
 for (let i in names1) {
    console.log("hi" + names1[i]);

 } 
 names2.push(7);
 console.log(names2);
  names2.forEach(element => {
    console.log(element);
  });

  names2.map(element => console.log(element));

  const name = 'Lev', time = 'today';
  console.log(`Hello ${name} , how are you ${time}?`) //Hello Lev , how are you today?


  let myArr1 = ['a', 'b', 'c'];
  let myArr2 = ['d', 'e', 'f'];
  console.log(myArr1.concat(myArr2)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
  console.log(myArr1.join('_')); //a_b_c
  //flat,sort,reverse,filter

  let myArray = [1, 2, [3,4]];
  console.log(myArray); //[ 1, 2, [ 3, 4 ] ]
  console.log(myArray.flat()); //[ 1, 2, 3, 4 ]

  const myArray1 = ["Wind", "Rain", "Fire"];
  console.log(myArray1); //[ 'Wind', 'Rain', 'Fire' ]
  console.log(myArray1.sort()); //[ 'Fire', 'Rain', 'Wind' ]
  console.log(myArray.flat().reverse()); //[ 4, 3, 2, 1 ]

  const myArray2 = ["Wind", "Rain", "Fire",'Test', 10 ,'Cat'];
  console.log(myArray2.filter(element => typeof element === "number")); //[ 10 ]
  console.log(myArray2.filter(element => typeof element === "string")); //[ 'Wind', 'Rain', 'Fire', 'Test', 'Cat' ]

  const sayings = new Map()
  sayings.set('cat','maew');
  sayings.set('bird','coo');
  console.log(sayings); //Map(2) { 'cat' => 'maew', 'bird' => 'coo' }
  console.log(sayings.get('bird')); //coo

  for(const [key,value] of sayings) {
    console.log(`${key} sounds ${value}`); //cat sounds maew //bird sounds coo
  }

  const set1 = new Set()
  set1.add(10);
  set1.add('Test');
  console.log(set1.has("Test")); //true
  let arr = Array.from(set1)
  console.log(arr); [ 10, 'Test' ]

  const dateVar = new Date()
  console.log(dateVar); //2023-07-02T18:50:10.969Z
  console.log(dateVar.getDay());
  console.log(dateVar.getMonth());
  console.log(dateVar.getYear());