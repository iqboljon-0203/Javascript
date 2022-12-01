////Home work
// #1
// function sumElements(arr){
//     let sum=0;
//     for(let item of arr) {
//         if(typeof item ==='number'){
//             sum+=item
//             console.log(item);
//         }
//     }
//     return sum;
// }
// console.log(sumElements([1,2,3,46]));
// #2
//  function countElements(arr){
//     let newArr=arr.join('').split("");
//     let obj={};
//     for(let item of newArr){
//         obj[item]=(obj[item])?++obj[item]:1
//     }
//     return obj
  
//  }
// console.log(countElements(["salom","aakafuleb"]));
// #3
// function compareArrays(arr1,arr2){
//     let count=0;
//     let max=Math.max(arr1.length,arr2.length);
//     for(let i=0;i<max;i++){
//         if(arr1[i]===arr2[i]){
//             count++
//         }
//     }
//     if(count===max){
//         return "arraylar bir-biriga teng"
//     }else if(count===0){
//         return "arraylar bir-biriga teng emas"
//     }else if(count<max){
//         return "arraylar bir-birigaqqisman teng"
//     }
// }
// console.log(compareArrays([1,2,3],[]));
// #4
// function camalize(str){
//     let newStr="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='-'){
//             newStr+=`${str[i+1].toUpperCase()}`
//             i++
//         }else{
//             newStr+=str[i]
//         }
//     }
//     return newStr;
// }
// console.log(camalize("-webkit-transition"))
// #5
let users=[
    {id:1,year:1998,engine:1,name:"Tico"},
    {id:2,year:2005,engine:1.2,name:"Matiz"},
    {id:3,year:2010,engine:1.6,name:"Gentra"},
    {id:4,year:2010,engine:1.5,name:"Cobalt"},
    {id:5,year:2012,engine:2,name:"Malibu"},
    {id:6,year:2000,engine:1.2,name:"Damas"},
    {id:7,year:2018,engine:2.4,name:"Tracker"},
]
// #1
// let arr=[];
// for (let obj of users) {
//     if(obj.year<2000){
//         arr.push(obj.name)
//     }
// }
// console.log(arr);
// #2
// let arr=[];
// for (let obj of users) {
//     if(obj.year>2010){
//         arr.push(obj.name)
//     }
// }
// console.log(arr);
// #3
// let arr=[];
// for (let obj of users) {
//     if(obj.year<2010){
//         arr.push(obj.name)
//     }
// }
// console.log(arr);
// #4
// function sortedObject(obj){
//     let arr=[];
//     for (let i=0;i<users.length;i++){
//         let second=users[id];
//         console.log(second);
//         if(users[i].engine>second){
//             arr.unshift(users[i]);
//         }else{
//             arr.push(users[i])
//         }
//     }
//     return arr;
// }
// console.log(sortedObject(users));