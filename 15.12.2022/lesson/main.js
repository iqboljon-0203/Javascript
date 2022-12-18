////IIFE,NFE,GLOBAL OBJECT
var name="Ali";
// function hey(){
//    var name="Karim"
// }
// hey()
// console.log(name);
//////
// {
//     var name="Karim"
// }
// console.log(name);
/////
// var i=1;
// for(var i=1;i<10;i++){

// }
// console.log(i);
/////
// var age=19;
// if(age){
//     var age=20;
// }
// console.log(age);
// function satHello(){
//     var name="Ali"
// console.log(name);

// }
// satHello()
// var name ="Karim";
// console.log(name);
///// let const
///IIFE
// let age=12;
// console.log(age);
// if(age){
//     let age=18;
//     console.log(age);
// }
// console.log(age);
// globalThis.age=12;
// console.log(age);
// (
//     function(){
//         var age=19;
//         console.log(age,globalThis.age)
//     }
// )();
// console.log(age);
///function 
// var age =12;
// console.log(age);
// function hey(){
//     var age=20;
//     console.log(age);
// }
// hey()
// console.log(age);
///Function object
// function say(a,b){
//     console.log(a,b);
// }
// say()
// console.log(say.name);
// console.log(say.length);
// let obj={
//     sayHi:function(a,b,c){
        
//     }
// }
// console.log(obj.sayHi.length);
// function sayHi(){
//     sayHi.counter++;
// }

// sayHi.counter=0;
// sayHi()
// sayHi()

// console.log(sayHi.counter);
///new function
// let sum=new Function("a","b","return a+b")
// console.log(sum(1,2));
////////
// function getFunc(){
//     let val="test";
//     let func=new Function("console.log(value)")/// value is not defined yani closure ishlamaydi
//     func()
// }
// getFunc()

//// NFE
// let sayHi=function func(ism){
//     console.log(ism);
//     return sayHi("Ali")
// }
// sayHi("Karim")
/////setTimeOut and setInterval
// console.log(1)
// let id = setTimeout(()=>{
//     console.log(2);
// },3000)
// setTimeout(()=>{
//     console.log(3);
// },0)
// console.log(4);
// globalThis.age=18;
// console.log(age);
// ///IIFE
// (function(){
//     var age=20;
//     console.log(globalThis.age);
// })()
// console.log(age);
///// 
// function sayHi(a,b,...res){
//     console.log(a,b);
// }
// sayHi(1,2)
// console.log(sayHi.name);
// console.log(sayHi.length);
///
// let obj={
//     sayHi:function(a,b,c,d){
//         console.log("salom");
//     }
// }
// console.log(obj.sayHi.length)
// function sayHi(){
//     sayHi.counter++
// }
// sayHi();
// sayHi();
// sayHi.counter=0;
// sayHi()

// console.log(sayHi.counter);
/////Consturctor functions
// function GetTime(){
//     this.locale=function(){
//         return "eng";
//     }
// }
// let moment=new GetTime();
// console.log(moment.locale());
///// new Function
// let sum=new Function("a","b","return a+b");
// console.log(sum(2,3));
////Closure ishlamaydi
// function getFunc(){
//     let value="test";
//     let func=new Function("console.log(value)")
//      return func()
// }
// getFunc()
/////NFE
// let sayHi=function func(ism){
//     console.log(ism);
//     return func("Salom")
// }
// sayHi("ali")
//////setTimeOut and setInterval
// let id=setTimeout(callback,time,...arg)
// console.log(1);
// let id=setTimeout(()=>{
//     console.log(2);
// },2000)
// setTimeout(()=>{
//     console.log(3);
// },0)
// console.log(4);
// let id=setTimeout((a,b)=>{
//     console.log("salom",a,b);
//     setTimeout(()=>{
//         console.log("hello");
//     },2000)
// },5000,"bonju","privet")
///setInterval
// let id=setInterval(()=>{
//     console.log("salom");
// },2000)
// let date=new Date();
// let id=setInterval(()=>{
//     console.log(`Time:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// },2000)
// clearTimeout(id)
// let id=setTimeout(()=>{
//     let innerID=setInterval(()=>{
//         console.log("salom");
//     },1000)
// },7000)









