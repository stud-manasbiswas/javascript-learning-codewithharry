// arrays are mutable 
// arrays are accessed by using indexes

let arr = [1,2,3,4,5,6,7,8]
console.log(arr);
// length of array
console.log(arr.length);

// changing array 
arr[2] = 34;
console.log(arr); // array changed

// methods in array 

// to string
console.log(arr.toString())
// join
console.log(arr.join(" # "));
// pop
arr.pop()
console.log(arr)
//push 
arr.push(100)
console.log(arr);
// delete
// delete arr;

// cocatination
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]
console.log(arr1.concat(arr2,arr3))
// returns a new array doesnot change the original array

// splice 
// delete the specfic portion and used to add elements

let numbers=[1,2,3,4,5]
// numbers.splice(1,3)
// console.log(numbers)

// we can also add the elements
numbers.splice(1,3,222,333)
console.log(numbers)


let obj = {
    a:1,
    b:2,
    c:3
}
// for in loop demonstration 
// used for object : key ,element pair
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

// for of
for (const it of arr) {
    console.log(it);
}

// map -- > creates a new array by performing same operation on each array element

let mapArr = [1,13,5,7,11];
let newArr = []

// for (let index = 0; index < mapArr.length; index++) {
//     const element = mapArr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)

// map data structure 
 newArr = mapArr.map((e)=>{
    return e**2;
})
console.log(newArr)

// reduce function

let array = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b
}

console.log(array.reduce(red))

// array form

Array.from("manas")