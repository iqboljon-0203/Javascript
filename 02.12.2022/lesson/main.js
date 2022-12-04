/////Array advanced
/////callback functions
///filter
// let num=[1,2,45,23,5,6,0];
// let res=num.filter((item,index,array)=>{
//     return item
// });
// console.log(res);
// let students=[
//     {name:"ali",age:20,faculty:"Economy"},
//     {name:"Vali",age:23,faculty:"Engenering"},
//     {name:"Karim",age:19,faculty:"Math"},
//     {name:"Abbos",age:10,faculty:"Pedagogy"},
//     {name:"Alisher",age:40,faculty:"Law"},
//     {name:"Valisher",age:25,faculty:"Healthy"},
// ];
// let res=students.filter((item,index)=>item.faculty.startsWith("E"))
// console.log(res);
///sort
// let num=[1,2,45,23,5,6,0];
// let res=num.sort((a,b)=>b-a)
// console.log(res);
// let str=['Apple','Greapes','banana'];
// let res=str.sort((a,b)=>a.localeCompare(b));
// console.log(res);
// let students=[
//     {name:"Ali",age:20,faculty:"Economy"},
//     {name:"Vali",age:23,faculty:"Engenering"},
//     {name:"Karim",age:19,faculty:"Math"},
//     {name:"Abbos",age:10,faculty:"Pedagogy"},
//     {name:"Alisher",age:40,faculty:"Law"},
//     {name:"Valisher",age:25,faculty:"Healthy"},
// ];
// let res=students.sort((a,b)=>b.age-a.age)
// console.log(res);
// let res=students.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(res);
///find
// let students=[
//     {name:"Ali",age:20,faculty:"Economy"},
//     {name:"Vali",age:23,faculty:"Engenering"},
//     {name:"Karim",age:19,faculty:"Math"},
//     {name:"Abbos",age:10,faculty:"Pedagogy"},
//     {name:"Alisher",age:40,faculty:"Law"},
//     {name:"Valisher",age:25,faculty:"Healthy"},
// ];
// let res=students.find((item,index)=>item.faculty.length>4);///find item
// console.log(res);
///findIndex
// let students=[
//     {name:"Ali",age:20,faculty:"Economy"},
//     {name:"Vali",age:23,faculty:"Engenering"},
//     {name:"Karim",age:19,faculty:"Math"},
//     {name:"Abbos",age:10,faculty:"Pedagogy"},
//     {name:"Alisher",age:40,faculty:"Law"},
//     {name:"Valisher",age:25,faculty:"Healthy"},
//     {name:"Alisher",age:40,faculty:"Law"},
// ];
// let res=students.findLastIndex(item=>item.age===40)
// console.log(res);
/////forEach
// let num=[1,23,4,54,65,213,454,23];
// let sum=0;
// let res=num.forEach((item,index,array)=>{
//     sum+=item
// })
// console.log(sum);
//////map
// let res=num.map((item,index,array)=>{
//     return item;
// })
// console.log(res);
/////every
// let num=[1,23,4,54,6521,3,454,23];
// let res=num.every((item)=>item>=1)
// console.log(res);///return true or false
/////some
// let num=[1,23,4,54,6521,3,454,23];
// let res=num.some((item)=>item<1)
// console.log(res);///return true or false
///fill
// let num=[1,23,4,54,6521,3,454,23];
// let res=num.fill("*",-5,-1);
// console.log(res);
// console.log(num);////asosiy massivga ham ta'sir qiladi
////copyWithin
// copyWithin(targetPos,start,end)
// let num=[0,1,2,3,4,5,6,7,8];
// let res=num.copyWithin(8,3,5);////target postionga start va end oralig'idagi elementlarini qo'yib beradi
// console.log(res);
/////reduce
// let num=[1,23,4,5,6,3,4,2];
// let res=num.reduce((sum,index)=>{
//     return sum-index
// },0)
// console.log(res);/////sum=>callback function nimaga return qilsa shunga teng
/////flat
// let num=[1,2,[3,22,[2,1,24],34],6];
// let res=num.flat(Infinity).reduce((a,b)=>a+b,0);
// console.log(res);
/////flatMap
// let num=[1,2,[3,22,[2,1,24],34],6];
// let res=num.flatMap((v)=>v*v);
// console.log(res);
/////new Set()
// let num=[1,1,2,4,5,6,6,7,8,10,3,4,5];
// let res=new Set(num);////removes dublicate items
// console.log(res);
/////new Set()=> in coding
// let res=num.filter((item,index,array)=>array.indexOf(item)===index);
// console.log(res);
//////array.from()
// let res=Array.from("Aliyev");
// console.log(res);
// let res=Array.from([1,2,3],(item)=>item/2)
// console.log(res);
/////new Map
// let obj={
//     name:"Ali",
//     age:19
// }
// let res=Object.entries(obj)
// // console.log(res);
// let mapper=new Map(res)
// // mapper=mapper.entries().next();
// console.log(mapper.entries().next());














