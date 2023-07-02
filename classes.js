// 

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

        