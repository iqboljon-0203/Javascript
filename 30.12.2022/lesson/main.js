// import {users} from './data.js';
////DOM3
// #Mouse Events
// btn.onclick=function(){
//     console.log("Mouse clicked!");
// }
// btn.onmouseover=function(){
//     console.log("Mouse onmouseover");
// }
// btn.onmousedown=function(){
//     console.log("Mouse onmousedown");
// }
// btn.onmouseout=function(){
//     console.log("Mouse onmouseout");
// }
// btn.onmouseup=function(){
//     console.log("Mouse onmouseup");
// }
// btn.onmousemove=function(){
//     console.log("Mouse onmousemove");
// }

// btn.oncontextmenu=function(){
//     console.log("Mouse oncontextmenu");
// }

// function press(id){
//     console.log(id.offsetX);
//     console.log(id.offsetY);

// }
// #Onclick
// - this <=> event.target
// function press(evt){
//     console.log(evt.textContent="salom")

// }
// -ID attr
// parent.onclick=function(evt){
//     console.log(evt);
// }
// #input
// function change(evt){
//     evt.value="alo"
// }
////map
// let parent=document.querySelector(".parent")
// users.forEach(value=>{
//     let wrap=document.createElement("div");
//     wrap.innerHTML=`${value.id}.${value.name} <button onclick="alert('${value.name}')">click me</button>`
//     parent.append(wrap)
// })
// #delete
// let data=users;
// let parent=document.querySelector(".parent")
// const eldelete=(id)=>{
//     let res =data.filter((el)=>el.id!==id);
//     data=res;
//     parent.innerHTML=null;
//     readData()
// }
// function readData(){
//     if(!data.length){
//         parent.innerHTML="no data"
//     }
//     data.forEach(value=>{
//         let wrap=document.createElement("div");
//         wrap.style.marginBottom="10px";
//         let btn=document.createElement("button");
//         btn.textContent="Delete";
//         btn.style.marginLeft="5px"
//         wrap.style.marginTop="10px";
//         btn.addEventListener('click',()=>eldelete(value.id))
//         wrap.innerHTML=`${value.id}.${value.name}`;
//         wrap.append(btn)
//         parent.append(wrap)
//     })
// }
// readData()


// #addEventListener
// function press(){
//     console.log("red");
// }
// btn.addEventListener("mousemove",press)
// #Events with classes
function press(){
    console.log("click 2");
}
// function down(){
//     console.log("down");
// }
function up(){
    console.log("up 3");
} 
// class Events {
//     // handleEvent(event){
//     //     switch(event.type){
//     //         case "click":console.log("click");break;
//     //         case "mouseup":console.log("mouseup");break;
//     //         case "mousedown":console.log("mousedown");break;
//     //     }
//     // }
//     onMousedown(){
//         console.log("salom");
//     }
// }
// let evn=new Events();
// let btn=document.querySelector(".btn");
// btn.addEventListener('mousedown',evn)
// // btn.addEventListener('mouseup',evn)
// // btn.addEventListener('mousedown',evn)
// #Bubling
// let inner=document.querySelector(".inner");
// inner.onclick=function(event){
//     event.stopPropogation();
//     console.log("Salom");
// }
// function inner(event){
//     event.stopPropogation();
//     console.log("salom");
// }
// #Event delegation
// let table=document.querySelector(".table");
// // table.addEventListener('click',())
// let target;
// function press(event){
//     if(target){
//         target.classList.remove("back")
//     }
//     target=event.target;
//     event.target.classList.toggle("back")
// }
////#Default actions

function press(event){
    event.preventDefault();
    alert("Hello")
}
let form=document.querySelector(".form");
form.addEventListener("submit",(event)=>{
    event.preventDefault()
})
///another ways
// onmousedown="return false"








