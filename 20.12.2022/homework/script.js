////Home work
// 1-masala?\
// object.remove('name');
// let obj={
//     name:"Ali",
//     surName:"Valiyev"
// }
// Object.prototype.remove=function(key){
//     for (const child in this) {
//        if(child===key){
//         delete this[child]
//        }
//     }
//     return this;
// }
// obj.remove("name");
// console.log(obj);
// 2-masala
// obj.set(key,flag,flagValue)
// let obj={
//     name:"Ali",
//     age:19
// }
// Object.prototype.set=function(key,flag,setFlag){
//     Object.defineProperty(this,key,{flag:setFlag})
//     console.log(this);
// }
// obj.set("name","writable",false)
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));