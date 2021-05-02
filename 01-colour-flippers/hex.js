// part 2 - more and unlimited colours

// colour range to pick from, 0-16, using a loop
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// example of colour = #f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = "#";
    // the generator loop 
    for (let i =0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNum(){
    return Math.floor(Math.random() * hex.length);
}