console.log("harry is a hacker")
console.log("rohan is a hecker")


setTimeout(() => {
    console.log(" i am inside set timeout")
}, 1000);
setTimeout(() => {
    console.log(" i am inside set timeout 2")
}, 1000);



console.log("the end ")

// callback function

const fn = () => {
    console.log("nothing")
  
}


const callback = (arg , fn) =>{
    console.log(arg);
    fn();
}

const loadscript = (src , callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("manas" , fn );
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback );