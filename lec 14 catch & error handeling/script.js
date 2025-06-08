console.log("error handeling")

let a = prompt("Enter First Number")

let b = prompt("Enter second Number")

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("sorry this is not allowed ")
}
let sum = parseInt(a)+parseInt(b)

try {
    console.log(" the sum is " , sum*x)
    
} catch (error) {
    console.log("Error aa gaya bhai ")
}
finally{
    console.log("files are being closed and db connection is being closed")
}



