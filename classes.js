 

class ClassName {
    constructor(param1, param2) {

    }
    fields = "";
    myMethods() { }

}

class Color {
    constructor(r,g,b) {
        //Assign he RGB values as a property of 'this'
        this.values = [r,g,b];
    }
    getRed() {
        return this.values[0];
    }
}

const red = new Color(255,0,0)
console.log(red);
console.log(red.getRed());


//Promises concept
//execute methods sequentially

new Promise((resolve,reject) => {
    console.log("initial statement");
    resolve();

}).then(() => {
    throw new Error('something failed');
    console.log('do things');
}).catch(() => {
    console.log('catch statement'); 

}).then(() => {
    console.log('do this finally')})
    .then(() => {
        console.log('do this finally 2')});

 function demo()
  {
    console.log("statement 1");
    return Promise.resolve();
 }
 demo().then(() => console.log("statement success"));


 function func1() {
    console.log('Function1 result');
 }
 function func2() {
    console.log('Function2 result');
 }
 function func3() {
    console.log('Function3 result');
 }

 Promise.all([func1,func2,func3]).then(([result1,result2,result3]) => {
    console.log(result1);
    console.log(result2);
    console.log(result3);
 });

 async function allFunctions() {
    try {
        const f1 = await func1();
        console.log(f1);
        const f2 = await func2();
        console.log(f2);
        const f3 = await func3();
        console.log(f3);
    }
    catch(error) {
        console.log(error.message);
    }
 }
 allFunctions();