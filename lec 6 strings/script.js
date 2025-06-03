console.log(" study about strings")

let a = "Harry"

console.log(a);

let n =  a.length;
console.log(n);
for(let i = 0 ; i < n ; i++){
    console.log(a[i]);
}

let real_name = "manas\tbiswas";
let friend = "roshan";
console.log(`his name is ${real_name} and his friend name is ${friend}`);
// uppercase & lowercase
let b = "shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

//slice method 
console.log(b.slice(1,5))
console.log(b.slice(1))

// replace method 
console.log(b.replace("shiva","nam"));

// concatinate 
console.log(b.concat(a));