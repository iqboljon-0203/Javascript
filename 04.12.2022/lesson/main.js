
////////
// let str="Full stack web programming";
// let obj={};
// function checkCountStringElements(string){
//     string=string.replaceAll(" ",'').toLowerCase();
//     for(let char of string){
//         if(char in obj) ++obj[char]
//         else obj[char]=1;
//     }
//     return obj
// }
// console.log(checkCountStringElements(str))
// // {"F":1,"u":1,}
/////Read
// let users=[
//     {id:1,year:1998,engine:1,name:"Tico"},
//     {id:2,year:2005,engine:1.2,name:"Matiz"},
//     {id:3,year:2010,engine:1.6,name:"Gentra"},
//     {id:4,year:2010,engine:1.5,name:"Cobalt"},
//     {id:5,year:2012,engine:2,name:"Malibu"},
//     {id:6,year:2000,engine:1.2,name:"Damas"},
//     {id:7,year:2018,engine:2.4,name:"Tracker"},
// ];
// console.log(users);
// const sortByAlphaBet=()=>{
//     let res=users.sort((a,b)=>a.name.localeCompare(b.name));
//     return res;
// }
// console.log(sortByAlphaBet())
// const sortByYear=()=>{
//     let res=users.sort((a,b)=>a.year-b.year);
//     return res;
// }
// console.log(sortByYear())
// let name="al"
// const sortByName=(name)=>{
//     let res=users.filter((item)=>item.name.includes(name));
//     return res;
// }
// console.log(sortByName(name))
// let year=2005;
// const sortByYear=(year)=>{
//     let res=users.filter((item)=>`${item.year}`.includes(year));
//     return res;
// }
// console.log(sortByYear(year))
// let cars=[
//     {id:1,year:1998,engine:1,name:"Tico"},
//     {id:2,year:2005,engine:1.2,name:"Matiz"},
//     {id:3,year:2010,engine:1.6,name:"Gentra"},
//     {id:4,year:2010,engine:1.5,name:"Cobalt"},
//     {id:5,year:2012,engine:2,name:"Malibu"},
//     {id:6,year:2000,engine:1.2,name:"Damas"},
//     {id:7,year:2018,engine:2.4,name:"Tracker"},
// ];
// const filter=({value,type})=>{

//     let res=cars.filter((item)=>`${item[type]}`.includes(value));
//     return res;
// }

// console.log(filter({value:"Cobalt",type:"name"}));
// // Filter({value:"al",type:"name"})
/////Delate
// const deleteCar=(id)=>{
//     let res=cars.filter((car)=>car.id!==id)
//     return res
// }
// console.log(deleteCar(3));
// const deleteCar=(id)=>{
//     cars.splice(id-1,1);
//     return cars
// }
// console.log(deleteCar(3));
//// creat new car
/////Create
// const addCar=(car)=>{
//     return [...cars,car];
// }
// console.log(addCar({id:8,year:2022,name:"Audi"}));
/////Update
// const updateCar=({id,key,value})=>{
//     let res=cars.map((car)=>(car.id===id?{...car,[key]:value}:car))
//     return res
// }
// console.log(updateCar({id:6,key:'engine',value:100}));
