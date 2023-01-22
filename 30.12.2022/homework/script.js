// #Event delegation
let table=document.querySelector(".table");
// table.addEventListener('click',())
let target;
function press(event){
    if(target){
        target.classList.remove("back")
    }
    target=event.target;
    event.target.classList.toggle("back")
}