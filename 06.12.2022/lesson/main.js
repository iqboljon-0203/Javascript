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

