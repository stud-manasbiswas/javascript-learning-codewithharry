//loops

console.log(" i am tutorial on loops")

let a = 1;

for(let i = 0; i < 50 ; i++){
        console.log(a+i);
}

let obj = {
    "name" : "harry",
    role : "programmer",
    company : "codeWithHarry"
}

for (const key in obj) {
   
        const element = obj[key];
        console.log(key,element);
    
}

for (const it of "Manas") {
    console.log(it);
}

//while loop
let i = 3;

while (i < 6) {
    console.log(i);
    i++;
}

// do-while loop to run atleast once
console.log("do-while")
let it = 1;

do {
    console.log(it)
    it++;
} while (it<=10);