//callback
 function  aggregate (a, b){
 return a() + b();
}

function adder (){
    return 3 + 3;
}

function multiplayer () {
    return 2 * 2;
}

console.log(aggregate (adder, multiplayer))

// //promises
// const myPromise = new Promise ( (res, rej) => {

//     return res (' was resolved');
// });
// myPromise.then ( (data) => {
//     console.log(data)
// })

//IIF
(
    console.log("I am IIEF")
)();

/**
 * closures
 * Immediately Invoked Functions
 * Destructuring
 * classes
 * promises/callbacks/async await
 * timer function: set
 */
