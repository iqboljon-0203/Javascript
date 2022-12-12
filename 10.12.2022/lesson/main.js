/////new Map,new Set,WeakMap,WeakSet
// let obj={}
// obj.name="Ali"
// // obj.["undefined"]="salom"///error
// obj["age"]=19;
// let a;
// let b=null;
// let c={};
// let student={
//     name:"ali",
//     age:19,
//     year:2020
// }
// let entry=Object.entries(student)
// console.log(entry);
// let map=new Map(entry);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map.has("old"));
// for(let item of map.entries()){
//     console.log(item);
// }
////forEach
// map.forEach(item=>console.log(item))
// let func=()=>{};
// map.set("name","Vali")
// map.set("age",20)
// map.delete("name")
// map.clear()
// map.set(func,"karim")
// // console.log(map.size)
// // console.log(map.get("age"));
// console.log(obj);
// console.log(map.size,map);

// let map=new Map([
//     ["name","Ali"],
//     ["age",19]
// ])
// console.log(map);
// let gen=map.entries();
// gen.next();
// gen.next();
// console.log(gen.next());
//// new Map -> arraydan to obj
//// Object.fromEntries();
// console.log(map);
// console.log(Object.fromEntries(map));/// map to obj
// let map=new Map();
// console.log(map.name="Ali"===map.set("name","Ali"));
// map.forEach(item=>{
//     console.log(item);
// })
// map.map(item=>console.log(item))/// isn't work

//// new Set 
// let arr=[1,2,3,3,4,2,1,6,7,8];
// let set=new Set()
// set.add("Vali");
// set.add("Karim")
// // set.has("Ali")=> return true or false
// set.delete("Vali")
// set.add("Vali")
// set.add("Karim")
// set.add(function name(){})
// set.add(NaN)
// // set.forEach(value=>console.log(value))///iteration
// console.log(set.size,set);
// console.log();

/////WeakMap and WeakSet
// let map= WeakMap([
//     ["name","Ali"],
//     ["age",19]
// ])
// // console.log(map);
// let obj={data:map}
// map=null;
// console.log(map);
// console.log(obj.data);

