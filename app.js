//Set initial count value
let count = 0;

//Select Value and Buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (ele) => {
    ele.addEventListener("click", (e) => {
        let classList =  e.currentTarget.classList;
        // console.log(classList);

        if(classList.contains("increase")) {
            count++;
        }
        else if(classList.contains("decrease")) {
            count--;
        }
        else {
            count = 0;
        }
        value.textContent = count;

        if(count > 0) {
            value.style.color = "green";
        }

        if(count < 0) {
            value.style.color = "red";
        }

        if(count === 0) {
            value.style.color = "black";
        }
    })
})