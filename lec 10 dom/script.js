console.log("hello world")

// let bhupendraJogis = document.getElementsByClassName("box")
// console.log(bhupendraJogis)

// bhupendraJogis[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor = "green" ---> return error

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})