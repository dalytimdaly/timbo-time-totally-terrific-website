const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

window.onload=function(){
const click = document.getElementById('banana');
click.addEventListener('click', function() {
    alert('Heeeey, keep it PG folks!');
});
}