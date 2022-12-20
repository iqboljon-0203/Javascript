//// DDOS attack,flags,getter,setter
// let getData = function(){
//         return fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
    
// }
// let obj={
//     name:"students",
//     getData:function(){
//         return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then((res)=>res.json())
//     }
// }

// function getCashed(func){
//     let cashe=new Map();
//     return function(x){
//         if(cashe.has(x)){
//             console.log(cashe.get(x));
//             return cashe.get(x)
//         }
//         let res=func.call(this)
//         return cashe.set(x,res)
//     }

// }
// obj.getData=getCashed(obj.getData)

/// flags
// let obj={name:"Ali",surName:"Valiyev"};

// // let flags=Object.getOwnPropertyDescriptor(obj,"name");
// // console.log(flags);
// Object.defineProperty(obj,"surName",{value:"Alimov",enumerable:true})
// for (const key in obj) {
//     console.log(key);
// }

// Object.preventExtensions(obj)
// delete obj.name
// console.log(obj);
////
// Object.seal(obj);
// delete obj.name
// console.log(obj);
// Object.isSealed(obj)///return true or false
////
// Object.freeze(obj)
// obj.name="Abbos";
// console.log(obj);
//////
// setter and getter
// let obj={name:"Ali",
//         surName:"Valiyev",
//         set fullName(value){
//             this.name=value.name;
//             this.surName=value.surName;
//         },
//         get fullName(){
//             console.log(`${this.name} ${this.surName}`);
//         }
       
// };
// obj.fullName={name:'Karim',surName:"Ganiyev"}
// obj.fullName

