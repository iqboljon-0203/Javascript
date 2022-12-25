///Generator functions
functions => return 
function* getData(){
    yield 1;
    yield 2;
}
let generator=getData();
let gn=getData()
console.log(generator.next());
console.log(generator.next());
console.log(gn.next());
///
for(value of generator){
    console.log(value);//iteration
}
console.log([...generator]);///iteration with spread
/create id
let users=[
    {
        id:1,name:"Abbos1"
    },
    {
        id:2,name:"Abbos2"
    },
    {
        id:3,name:"Abbos3"
    },
    {
        id:4,name:"Abbos4"
    },
    {
        id:5,name:"Abbos5"
    },
    {
        id:6,name:"Abbos6"
    },
]
function* getData(){
    let id=users.length;
    while(true){
        yield ++id
    }
}
let generator=getData();
console.log(generator.next());
console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

console.log(generator.next());

 const deleteUser=(id)=>{
    let res=users.filter(item=>item.id!==id);
    users=res;
 }
 deleteUser(3);
const addUser=(ism)=>{
    users=[...users,{id:generator.next().value,name:ism}];
}
addUser("Karim");
deleteUser(6)
addUser("Vali")
console.log(users);
function* getData(arr){
    for(item of arr){
        console.log(param);
        let param=yield item;
    }
}
let generator=getData([1,2,5,7,8]);
///
function* getData(){
    let id=0;
    while(true){
        yield ++id
        if(id===4){
            return
        }
    }
}
let generator=getData()

console.log(generator.next(3));
console.log(generator.next(9));
console.log(generator.next(11));
console.log(generator.next(13));
console.log(generator.next(15));
console.log(generator.next(15));

console.log(generator.next(15));

console.log(generator.next(15));




