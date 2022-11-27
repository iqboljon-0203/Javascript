// 'use strict'
// //////
// let obj1={
//     name:"Ali",
//     age:18,
// };
// let obj2={
//     name:"Ali",console.log(this);
//     age:18,
// };
// const obj3=obj1;
// obj3.name="Sardor"
// obj1={};
// console.log(obj3.name);
// console.log(obj1.name);
// // console.log(obj1===obj3);
///////
// let obj={
//     name:"Ali",
//     age:18,
//     sayHi:function(){
//         console.log("Hello");
//     }
// };
// obj.sayHi()
//////
// {
//     console.log(this);=>return {}
// }
////
// let obj = {
//   name: "Ali",
//   age: 18,
//   sayHi:function(){
//     console.log(this);
//   },
// };
// obj.sayHi()

////// ()=>{console.log(this)}=>{}

// let obj = {
//   name: "Ali",
//   age: 18,
//   sayHi:function(){
//     return ()=>
//         console.log(this.name);

//     },
// };
// obj.sayHi()();

/// Constructor function=> object qaytaradi
// function get(){
//     console.log(this);=>window
// }
// get()
// function Student(name,age){
//     this.name=name
//     this.age=age;
//     this.getName=function(){
//         console.log(this.name);=>constructor function
//         return "hey"
//     }
// }
// let ali=new Student("Ali",19);
// console.log(ali.getName());

/////symbols
// let obj1=Symbol("text");
// let obj2=Symbol("item");
// let name="salim"
// console.log(obj1);
// console.log(obj2);
// let obj={
//     gender:"male",
//     [obj1]:"Ali",
//     [obj2]:24,
//     getInfo:function(){
//         console.log(`His name is ${this.name},his age ${this.age}`);
//     }
// }
// console.log(obj[obj1]);
// console.log(obj['gender']);
// console.log(obj[obj2]);
// let obj1={
//     name:"Ali",
//     age:20
// }
// let obj2={
//     name:"Vali",
//     age:15
// }
// console.log(obj1+obj2);
//////Distructure
// let name="Karim"
// let obj={
//     name:"Vali",
//     age:15,
//     child:{
//         childName:"Gani"
//     },
//     getName:function(){
//         console.log(this.name);
//     }
// }
// const {name:objName,age:yosh,child:{childName},getName:getHisName}=obj;
// console.log(objName);
// console.log(yosh);
// console.log(childName);
// getHisName();

///////spread
// let obj = {
//   name: "Vali",
//   age: 15,
//   child: {
//     childName: "Gani",
//   },
// };

// // console.log({...obj,...obj.child,name:"karim"});

// /////forin
// for(let key in obj){
//     console.log(obj[key]);
// }

