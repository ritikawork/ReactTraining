//FUNCTIONS

let tensquared = (function(x) {return x * x;}(10));
console.log(tensquared); //100

const sum = (x,y) => { return x + y}
console.log(sum(10,20)); //30

const constantFunc = () => 42;
console.log(constantFunc()); //42

function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
        return `Score {num1 + num2}`;
    }

    return add();
}

console.log(getScore()); //5

//The outer function defines a variable called "name"
const pet = function(name) {
    const getName = function() {
        //The inner function has access to  "name" vaiable of outer function
        return name;
    };
    return getName();  
};

const myPet = pet('Jhony');
console.log(myPet); //Jhony


function getMonthName(monthNumber) {
    monthNumber--;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (months[monthNumber]) {
    return months[monthNumber];
    }
    else {
    throw new Error("Invalid Month Number");
    }
    }

    try {
    console.log(getMonthName(13));
    }
    catch (e) {
    console.log(e.name); //Error
    console.log(e.message); //Invalid Month Number
    }

    function f() {
    try {
    console.log(0);
    throw "bogus";
    } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
    } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
    }
    console.log(f());