/// Proxy -> non-primitive
// let proxy=new Proxy(target,handler)
// GET
// let obj={
//     name:"Ali",
//     _pw:12345,
// }
// let proxyGet=new Proxy(obj,{
//     get(target,prop){
//         if(prop.startsWith("_")){
//             return `Access don't this key`
//         }
//         return target[prop]
//     }
// })
// proxy._pw=20;
// console.log(proxy._pw);
///SET
// let proxy=new Proxy(obj,{
//     set(target,prop,value){
//         if(prop="_pw"){
//             return false
//         }
//         target[prop]=value;
//         return true;
//     }
// })
// proxy._pw=20;
// console.log(proxy._pw);
// console.log(proxy);
////ownKeys()
// let proxy=new Proxy(obj,{
//     ownKeys(target){
//        Object.keys(target).filter(item=>!item.startsWith("_"))
//     }
// })
// console.log(proxy);
//// has
// let range={
//     from:1,
//     to:10
// }
// let proxy=new Proxy(range,{
//     has(target,prop){
//        return target.from<=prop && target.to>=prop;
//     }
// });
// console.log(1 in proxy);
//// syntax sugar
// Reflect.set(obj,"name","Karim");
// console.log(obj);
// // Reflect.get(obj,"_pw");
// console.log(Reflect.get(obj,"_pw"));
/////
// remove this
// let obj={
//     name:"Ali",
//     _pw:12345,
//     get(){
//         console.log(this._pw,this.name);
//     }
// }
// let data=obj.get;
// data();
// // obj.get()
// data.call(obj)








