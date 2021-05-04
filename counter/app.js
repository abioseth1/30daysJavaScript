// set initial count
var count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList; 
    // change counter on button click
        if(styles.contains("decrease")){
            count --;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else {
            count = 0
        }
    // to tweak the counter colour
        if(count > 0){
            value.style.color = "green"
        }
        if(count < 0){
            value.style.color = "red"
        }
        if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;
    });

});
