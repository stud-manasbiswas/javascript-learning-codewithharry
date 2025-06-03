/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let rand = Math.random()
let first , second ,third;
// lets generate the first word
if(rand < 0.33){
    first ="crazy"
}
else if(rand < 0.66 & rand >=0.33){
    first="amazing"
}
else{
    first="fire"
}

// lets generate the second word
if(rand < 0.33){
    second ="Engine"
}
else if(rand < 0.66 & rand >=0.33){
    second="foods"
}
else{
    second="garments"
}
// lets generate the thord word
if(rand < 0.33){
    third ="bros"
}
else if(rand < 0.66 & rand >=0.33){
    third="limited"
}
else{
    third="hub"
}


console.log(`${first}   ${second}   ${third}`)