/////Destructure in object and array && function parametr && Object.entries
// let obj={
//     name:"Ali",
//     age:21,
//     language:{
//         own:"uzbek",
//         hisKnown:"english"
//     }
// }
// // console.log(obj.name); //let name=obj.name;
// // console.log(obj.age);
// let name="Vali";
// const {name:objName,age:objAge,language:{own,hisKnown}}=obj; /// let name=obj.name /// let age=obj.age;
// // console.log(objName);
// console.log(own);
// console.log(hisKnown);
////array
// let arr=["ali","vali","salim","karim"];
// const [zero,one,two,three]=arr; /// let zero=arr[0],let one=arr[1];
// // console.log(three);
// //////spread
// const [first, ...res]=arr;
// console.log(res);=>[ 'vali', 'salim', 'karim' ]
////
// let obj={
//     name:"Ali",
//     age:21,
//     language:{
//         own:"uzbek",
//         hisKnown:"english"
//     }
// }
//////
// function getData(data={}){
//     console.log(data?.name,data?.age);
// }
// getData({name:"Ali",age:19})
//////
// Object.entries(obj).map(([key,{own,hisKnown}],index)=>{
//     console.log(key,own);
// })
/////new Date obyekti

const date =new Date();
// console.log(date);
// console.log(Date.now()/1000/60/60/24/30/12);
// console.log(date.getDay());/// haftani nechchinchi kunligi
// console.log(date.getDate());////kun
// console.log(date.getMonth());////11 by index
// console.log(date.getFullYear());///yil
// console.log(date.getTime());<===>Date.now()
///////
// function getDate(symbol){
//     return `Today:${date.getDate()}${symbol}${date.getMonth()+1}${symbol}${date.getFullYear()}`
// }
// console.log(getDate("-"));
/////
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());\
// let week=["sunday","monday","tuesday", "wednesday ","thursday", "friday ","saturday"];
// console.log(week[date.getDay()]);
/////
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toString());
/////JSON
// let obj={
//     name:"ali",
//     age:19,
//     custom:{
//         fullName:"Ganiyev",
//         year:2000
//     }
// }
// // let arr=["Ali","Vali"]
// let json=JSON.stringify(obj,["name","age","custom","fullName","year"],2)
// /////
// let jsonToObj=JSON.parse(json);
// console.log(jsonToObj);
/////Object copy
let obj={
    name:"ali",
    age:19,
    custom:{
        fullName:"Ganiyev",
        year:2000
    }
}
// #1let copy=Object.assign({},obj);////deep copy
// copy.age=20;
// console.log(obj);
// console.log(copy);
// #2
// let copy=structuredClone(obj);///deep copy
// console.log(copy);
// #3
// let json=JSON.stringify(obj);///deep copy
// let copy=JSON.parse(json)
// copy.name="Karim";
// console.log(obj);
// console.log(copy);


