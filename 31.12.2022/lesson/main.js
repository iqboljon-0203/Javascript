///DOM->UI events
// #mouse events
// -onchange
// function change(evt){
//     span.textContent=evt.target.value;
//     console.log(evt.key,evt.code,evt.type);
// }
// -onkeypress
// -ondblclick
// function hey(event){
//     console.log(event.key);
// }
// -oncopy
// function copy(){
//     console.log("heloo");
// }
// #keyboard events
let box=document.querySelector('.box');
// box.addEventListener("click",(event)=>{
//     console.log(event.code);
// })
// function move(event){
//     if(event.ctrlKey){
//         console.log(event.y);
//         box.style.backgroundColor=`rgb(${event.x} ${event.y} ${event.x})`

//     }
// }
// #scroll
// box.addEventListener('scroll',(event)=>{
//     if(event.target.scrollTop+event.target.clientHeight+50>event.target.scrollHeight){
//         box.textContent+=box.textContent;
//     }
// })
// let nv=document.querySelector('.navbar');
// window.addEventListener("scroll",(event)=>{
//     if(window.scrollY>=18){
//         nv.style.boxShadow=`5px 10px 18px red`;
//     }else{
//         nv.style.boxShadow=null;

//     }
// })