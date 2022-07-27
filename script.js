const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

window.onload=function(){
const click = document.getElementById('banana');
click.addEventListener('click', function() {
    alert('Heeeey, keep it PG folks!');
});


const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 ) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener ("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener ("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

function moveDodgerUp () {
    const upNumbers = dodger.style.up.replace("px", "");
    const up = parseInt(upNumbers, 10);

    if (up < 360) {
        dodger.style.up = `${up + 1}px`
    }

    
}
}