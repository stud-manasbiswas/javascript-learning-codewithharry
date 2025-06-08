async function getData() {
  // we are simulating data from a server 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 5300);
  });
}

// settle means resolve or reject 

// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
  // we are simulating data from a server 
      let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await x.json()
      return data
}


async function main() {
  console.log("Loading Modules");

  console.log("do Something else ");

  console.log("Load Data");
  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}

main();

// jab data fetch ho jaye tab yeh baki ka kaam hoi isliye then use kr lete hai
// or bhi tareeke hai

// data.then((v)=>{

//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
// })

// use of Async Wait
