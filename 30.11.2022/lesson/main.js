//////Array
// let name="Iqboljon"
// {name:"Ali"};
// let arr=[1,2,3,null,undefined,function(){},Symbol("salom")];

// let mas=[];
// let old=new Array();=>konstruktor usuli
// console.log(mas);
// console.log(old);
////assign value
// arr[7]="new";
// console.log(arr);
// let newArray=[1,2,3,["salom","qale"],undefined,null];
// console.log(newArray);
// object keys in array Elements
// let obj={
//     name:"Ali",
//     age:19,
//     number:998902123678
// }
// let arr= Object.keys(obj);
// console.log(arr);
// let arr=new Array("ali");
// console.log(arr);
// let newArr=new Array(12);=>uzunligi 12 ga teng bulgan array yaratadi
// console.log(newArr);
/////Array to string
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// // console.log(arr1+arr2);=>1,2,34,5,6
// console.log(arr1.toString()+" "+arr2.toString())
// console.log(String(arr1));
/////obj vs array
// let obj={name:"Ali"}
// console.log(typeof arr1);
// console.log(typeof obj);
// console.log(Array.isArray(obj));
// console.log([]==0);
// console.log("0"=="");
// if(""){
//     console.log("Salom");
// }
/////for of
// for (const item of arr1) {
//     console.log(item);
// }
// console.log(arr1.length);=>5
// for(let i=0;i<arr1.length;i++){
//     console.log(arr[i]);=> value || element chiqaradi
// }
// for (const item in arr) {
//     console.log(item);=>index chiqaradi
// }
///////Array methods
// let arr=[1,2,3,null,undefined];
// arr[100]="100 element";
// console.log(arr.length);
// console.log(arr.at(-5));=> the same arr[],but get minus index
// arr.push("salom");//=>oxiridan qushadi
// arr.unshift("first")//=> boshidan qushadi
// arr.pop()=>oxiridan uchiradi
// arr.shift()=>boshidan uchiradi
// let slicedArray=arr.slice(0,4);
// console.log(slicedArray);
// console.log(arr.splice(-4,2));
// console.log(arr.splice(5,0,"last"));///add
// console.log(arr.splice(2,1,"third"));///update
// console.log(arr.splice(0,2));//remove
// console.log(arr);
// let arr1=[1,2,3,232,3232,3,4322,NaN];
// let arr2=[1,2,3];
// console.log(arr1.concat(arr2,arr1,arr2));
// console.log(arr1===arr2);
////indexOf
// console.log(arr1.indexOf(4322,3));///item,
// console.log(arr1.indexOf(NaN));=> return -1
// console.log(arr1.lastIndexOf(3));
// console.log(arr1.includes("ali"));=> return true or false
// arr1.reverse();=>array teskarisini qaytaradi
// console.log(arr1);
// split() vs join()
// let str = "salom...alaykum";
// console.log(str.split('.'));
// let arr =["sal","om","alay","kum"];
// console.log(arr.join("$"));

// let arr=Array.from("Salom");
// console.log(arr);



