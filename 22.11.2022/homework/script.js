//////Home work
// #1
// let obj={
//     name:'John',
//     surname:"Smith",
// }
// obj.name="Pete";
// delete obj.name;
// console.log(obj);
// #2
// let schedule={};

// alert(isEmpty(schedule));//true
// schedule['8:30']='Get Up';
// alert(isEmpty(schedule));///false
// function isEmpty(obj){
//     if(obj){
//         return true;
//     }else{
//         return false;
//     }
// }
// #3
// let saleries={
//     John:100,
//     Ann:160,
//     Pete:130
// }
// ////Answer dynamic
// function sortedObject(obj){
//     let arr=Object.entries(saleries);
//     arr=arr.sort((a,b)=>b[1]-a[1])
//     console.log(arr);
//     let sorted=arr.reduce((a,v)=>({...a,[v[0]]:v[1]}),{})
//     return sorted;
// }
// console.log(sortedObject(saleries));
///////ANother Answer
// let sum=0;
// for(let key in saleries){
//     if(saleries==={}){
//         return 0;
//     }
//     sum+=saleries[key];
// }
// console.log(sum);
// for(let key in saleries){
//     function compare(num1, num2, num3) {
//         if (num3 > num2 && num1 > num3) {
//             return num1;
//         } else if (num2 > num1 && num2 > num3) {
//             return num2;
//         } else {
//             return num3;
//         }
//     }
//     console.log(compare(saleries[key], saleries[key], saleries[key]));
// }

// #4
// let menu={
//     width:200,
//     height:300,
//     title:"My menu"
// };
// function multiplyNumbers(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='number'){
//             obj[key]=obj[key]*2;
//         }
//     }
// }
// multiplyNumbers(menu);
// console.log(menu);
// Masalalar:
// No1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// };
// Answer:
// for (const key in obj) {
//    console.log(key);
// }
// no2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// };
// Answer:
// for (const key in obj) {
//     if (typeof obj[key]==='number') {
//         console.log(key);
//     }
// }
// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// };
// // Answer:
// for(let key in obj){
//     if(typeof obj[key]!=='boolean'){
//         delete obj[key];
//     }
// }
// console.log(obj);
// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// };
// Answer:
//  function Search(obj,str){
//     for(let key in obj){
//         if(obj[key]===str){
//             console.log(`${key}:"${obj[key]}"`);
//         }
//     }
//  }
//  Search(obj,'WebBrain');
// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// };
// Answer:
// function searchValue(object,str){
//     for(let key in object){
//         if(typeof object[key]==='string' && object[key].includes(str)){
//             console.log(obj[key]);
//         }
//     }
// }
// searchValue(obj,'i');
// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20,
//             child:{
//                 age:70
//             }
//         }
//     }
// };
/////Answer dynamic
// let sum=0
// function sumAge(param){
//     let arr=Object.keys(param).includes('child');
//     sum+=param.age;
//     if(arr){
//         sumAge(param.child)
//     }
//     return sum;

// }
// console.log(sumAge(person))
// Answer:
// let sum=0;
// for(let key in person){
//     if(key==='age'){
//         sum+=person[key];
//     }
//     if(key==='child'){
//         for(let item in person.child){
//             if(item==='age'){
//                 sum+=person.child[item];
//             }
//             if(item==='child'){
//                 for(let inner in person.child.child){
//                     if(inner==='age'){
//                         sum+=person.child.child[inner];
//                     }
                    
//                 }
//             }

//         }
//     }
// }
// console.log(sum);
// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
// let user = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }
