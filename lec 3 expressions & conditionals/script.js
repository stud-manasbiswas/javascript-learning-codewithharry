console.log("conditionals statements + operators ")

let age = 19;
let grace = 2;
//operators
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)



// if - else statements
if(age  != 18){
    console.log("you can drive")
}
else{
    console.log("you cannot drive")
}


// comments in javasript

/* 
i am a multiline 
comments

lessely used
*/


//if else ladder


let ummar = 20;

if(ummar > 0 && ummar < 5){
    console.log("A new born baby ")
}
else if(ummar > 10 && ummar < 15){
    console.log("but you are a kid ")
}
else if(ummar > 18){
    console.log("not a kid & you are allowed for driving licence ")
}
else{
    console.log(" invalid ummar ")
}

let a = 6 , b =8;
let c = a > b ? (a-b):(a+b)

console.log(c)