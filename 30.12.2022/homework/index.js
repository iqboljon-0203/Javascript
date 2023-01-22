///Collapse
// let button=document.getElementById("btn");
// const press=()=>{
//     button.parentElement.nextElementSibling.classList.toggle("open")
// }
/////Carousel
let ulElement=document.querySelector(".list")
for(let i=0;i<ulElement.children.length;i++){
    let img=document.createElement("img");
    img.setAttribute("src",`https://picsum.photos/id/${i}/300/300`);
    ulElement.children[i].append(img)
}
// function change(){
//     // ulElement.children[i].style.position="absolute";
//     for(let i=0;i<ulElement.children.length;i++){
//         ulElement.children[i].style.translateX(-50%)
//     }
// }
let prev=document.querySelector(".prev");
prev.addEventListener("click",change)