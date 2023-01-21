////DOM 2
// #Browser load=> generates DOM Object
// let dom={
//     tag:"h1",
//     content:"Salom"
// }
// #Attributes
let title = document.querySelector(".title");
// console.log(title.hasAttribute("id"));-> return true or false
// console.log(title.getAttribute("class"));-> return value
// console.log(title.getAttribute("class"));-> get value
// console.log(title.setAttribute("id","sarlavha"));->set atribut
// console.log(title.removeAttribute("id"));
// console.log(title);
// #Creating element
// let btn=document.createElement("button");
// btn.setAttribute("class","btn");
// let btnText=document.createTextNode("Bosing");
// console.log(btnText);
// btn.append(btnText)
// console.log(document.body.append(btn));
// #INsertion
let list = document.querySelector(".list");
// list.before(btn)
// list.after(btn)
// list.prepend(btn)
// list.append(btn)
// list.replaceWith(btn)
/////
// #insertAdjacentHTML
// list.insertAdjacentHTML("afterend",`<h1>Salom</h1>`)
// list.insertAdjacentText("beforebegin","Hello")
// #remove
// list.remove()
// #cloneNode
// let anotherList=list.cloneNode(true);
// console.log(anotherList);
// #Style
// list.style.backgroundColor="red"
// list.style.top="50px";
// console.log(list.className);
// // console.log(list.classList.add("bozorlik"));
// // console.log(list.classList.remove("ruyxat"));
// // console.log(list.classList.toggle("bozorlik"));
// // console.log(list.classList.toggle("umumiy"));
// console.log(list.classList.contains("bozorlik"));
// console.log(list);
// #cssText
// list.style.cssText=`
//     background-color:red;
//     color:white;
//     font-size:30px;
//     list-style:disc;

// `
// #Geometry of elements
// console.log(div.offsetParent);->body
// console.log(div.offsetLeft);
// console.log(div.offsetTop);
// console.log(div.offsetWidth);
// console.log(div.offsetHeight);
// console.log(div.clientLeft);-> border qalinligi
// console.log(div.clientTop);
// console.log(div.clientHeight);->bordersiz balandligi
// console.log(div.clientWidth);
////
// #Scroll
// console.log(div.scrollHeight);
// console.log(div.scrollWidth);
// console.log(div.scrollLeft);
// div.scroll(0,"120px")
let div =document.querySelector(".parent");
// let uzunlik=div.clientHeight;
// console.log(uzunlik);
// function press(){
//     if(uzunlik===div.clientHeight){
//         let btn=document.getElementById("but");
//         btn.textContent="Show less";
//         div.style.height=`${uzunlik}px`
//     }
//     div.style.height=`${div.scrollHeight}px`  
// }
// div.scroll(x,y)
// div.scrollBy(0,100)
// div.scrollTo(0,200)
// console.log(window.scrollX);
// console.log(window.scrollY);
// #Coordinate
// console.log(div.getBoundingClientRect());


