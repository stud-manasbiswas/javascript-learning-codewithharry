console.log("Events")

let button = document.getElementById("btn");

button.addEventListener("click" , ()=>{
    // alert("I was clicked ")
    document.querySelector(".box").innerHTML = "<b> yayy you were clicked</b> Enjoy your click"
})
button.addEventListener("contextmenu" , ()=>{
    alert("Right click Please")
})
document.addEventListener("keydown" , (e)=>{
    console.log(e.key)
})