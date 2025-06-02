 console.log("faulty calculator exercise")

// create a faulty calculator using javascript

// this faulty calculator does following :

// 1. it takes two numbers as input from the User
// 2. it performs wrong operations as follows

// + ---> -
// * ---> +
// / ---> **
// - ---> /

// it performs wrong operation 10% of the time





let random = Math.random()
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "/" : "**",
    "-" : "/"
}

if(random > 0.1){
    // we perform the correct calculation 
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // we perform the wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}