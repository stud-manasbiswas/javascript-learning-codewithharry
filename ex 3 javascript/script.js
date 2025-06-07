console.log(" exercise 3 ")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)

// 0 + Math.Random() *255 ; -- > will generate me a random number 
// Math.ceil(0 + Math.Random() *255 ; -- > will generate me a random int number )


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255) ; 
    let val2 = Math.ceil(0 + Math.random()*255) ; 
    let val3 = Math.ceil(0 + Math.random()* 255 ); 
    return `rgb(${val1} , ${val2} , ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})