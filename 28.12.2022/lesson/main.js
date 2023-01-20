///DOM->document object model
///BOM=>browser object model
// console.log(window);
// console.log(globalThis);
// console.log(this);
// console.log(global);
// console.log(document);->html oralali murojaat qila oladigan 
// #window
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// #document
// console.log(document.title);
// console.log(document.location.href);
// console.log(document.location.pathname);
// #BOM
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.host);
// console.log(location.hostname);
// #DOM
// #body
// document.body.style.background="red"
// #Nodes
let ulElement=document.getElementsByTagName("ul")[0];
// // console.log(ulElement.parentNode);
// // console.log(ulElement.childNodes);
// // console.log(ulElement.lastChild);
// console.log(ulElement.lastChild.previousSibling);

// console.log(ulElement.children);
// #Elements
// console.log(ulElement.parentElement);
// console.log(ulElement.children);
// // console.log(ulElement.firstElementChild);
// // console.log(ulElement.lastElementChild);
// console.log(ulElement.firstElementChild.nextElementSibling);
// console.log(ulElement.lastElementChild.previousElementSibling);
/////Selectors
// old version
// let divElement=document.getElementsByTagName("div")[0]
// console.log(divElement.style.background="blueviolet");
// let divElement=document.getElementsByClassName("parent")
// console.log(divElement);
// let divElement=document.getElementById("wrapper")
// console.log(divElement);
// let list=document.getElementsByName("text");
// console.log(list.style.background="red");
//////
// new Version
// let div=document.querySelectorAll(".parent");
// console.log(div);
// let item=document.querySelector("#bir");
// console.log(item);
// let ul=document.querySelector("ul")
// console.log(ul);
/////#DOM Node classes
// let item=document.querySelector("#bir");
// console.log(item.innerHTML="<h1>Salom</h1>");
// console.log(item.innerText="<h1>Salom</h1>");
// console.log(item.textContent="<h1>Salom</h1>");
// console.log(item.outerHTML="<h1>Salom</h1>");
// ikki.innerHTML="<h1>Hey</h1>"
// console.log(ikki);
// item.hidden=false



















