// Part 1- simple colour range
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn")
const color = document.getElementById(".color")

//add event on-click
btn.addEventListener("click", function(){
    // get random number btw 0-3 colours[3]-length of array
    const randomNumber = getRandomNum();
    console.log(randomNumber);

    // change the bg colour randomly on-click
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//generate funtion to create the random number
function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}


