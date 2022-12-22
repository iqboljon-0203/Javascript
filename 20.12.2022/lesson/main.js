OOP basic,__proto__,prototype
OOP->object oriented programming
let obj={name:"Ali",surname:"Valiyev"};
Object.assign(obj,obj1)
console.log(obj);
obj.__proto__=obj1;////1-usul
console.log(obj.surname);
////
Object.setPrototypeOf(obj,obj1)//2-usul
console.log(obj.surname);
////
Object.prototype.fullName=function(){
    console.log(`${this.name} ${this.surname}`);
}
obj.fullName()
console.log(obj);
//
let arr=[1,2,3,4,5,6,7]
Array.prototype.remove=function(item){
    let res=this.filter(child=>child!==item)
    return res
}

console.log(arr.remove(7));


