////error handling,callback and promise,async and await
// error handling
// console.log(number);
// try{
//     console.log(JSON.parse(`{"name":"Salom"}`))
// }catch(error){
//     console.log(error);
// }
/////////
// try{
//    let err=new ReferenceError(
//         er instanceof ReferenceError
//    )
//    throw err
// }catch(error){
//     console.log(error.name);
// }
// finally{
//     console.log("go home");
// }

const users={
    ali:{
        login:"Ali",
        password:12345,
        fullName:"Ali Valiyev"
    },
    karim:{
        login:"Karim",
        password:00000,
        fullName:"Karim Ustunov"
    }

}
// console.log("Started...");
// const login=(lg,ps,call)=>{
//    setTimeout(()=>{
//     if(users.ali.login===lg&&users.ali.password===ps){
//         return call(`WelCome to facebook`,()=>`${users.ali.fullName}`)
//     }
//     else{
//         return call(`Kechirasiz parolingiz noto'g'ri ekan!:)`,()=>`${users.ali.fullName}`)
//     }
//    },1000)
// }
// login("Ali",12345,(user,getFullName)=>{
//     console.log(user);
//     console.log(getFullName());
//     console.log("Finished...");
// });
// callback hell=> calback in calback
console.log("Started...");
let user=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(users.ali.login==="Ali"&&users.ali.password===12345){
            resolve(`${users.ali.fullName}, welcome to Facebook`)
        }
        else{
            reject(`Kechirasiz parolingiz noto'g'ri ekan!:)`)
        }
       },1000)
})
// user.then((data)=>console.log(data)).catch((err)=>console.log(err))
////////Promise.all
//  let all= Promise.all([new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(users.karim.login==="Karim"&&users.karim.password===00000){
//             resolve(`${users.karim.fullName}, welcome to Facebook`)
//         }
//         else{
//             reject(`Kechirasiz parolingiz noto'g'ri ekan!:)`)
//         }
//        },1000)
// }),
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(users.ali.login==="Ali"&&users.ali.password===12345){
//             resolve(`${users.ali.fullName}, welcome to Facebook`)
//         }
//         else{
//             reject(`Kechirasiz parolingiz noto'g'ri ekan!:)`)
//         }
//        },1000)
// })]);
//  all.then((data)=>console.log(data)).catch((err)=>console.log(err))

// async function get(){}
/////async and await 
// const get=async()=>{
//     let res=await user;
//     console.log(res);
//     console.log("Finished ...");
// };
// get()

