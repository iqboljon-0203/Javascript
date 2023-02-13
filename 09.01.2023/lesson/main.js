// https://houzing-app.herokuapp.com/api/public/auth/login
// fetch(link,config) vs axios
// fetch("https://jsonplaceholder.typicode.com/users")=> return promise

//////url,link,endpoint,silka

// methods:POST,GET,PUT/PATCH,DELETE


////then,promise,async await,try catch

// fetch("https://jsonplaceholder.typicde.com/users").then((res)=>{
//     return res.json()}).then((data)=>console.log(data)).catch((error)=>console.log(error,"error"));



// let promise=fetch("https://jsonplaceholder.typicode.com/users");
// promise.then((res)=>res.json()).then((data)=>console.log(data))

// async function getData(){
//     let promise= await fetch("https://jsonplaceholder.typicode.com/users");
//     let data= await promise.json();
//     console.log(data);
// }
// function getData(){
//     fetch("https://jsonplaceholder.typicode.com/users",{
//         headers:{
//             "Content-Type":"application/json",
//             Authorization:`Bearer `
//         },
//         body:JSON.stringify({
//             login:"Ali",
//             password:12345
//         })
//     }).then((res)=>res.json()).then((data)=>{
//         data.forEach(element => {
//             const div=document.createElement("div");
//             div.innerHTML=`<b>${element.id}</b>-<span>${element.name}</span> <button onclick="selectedData(${element.id})">Selected</button> <button onclick="updatedData(${element.id})">Update</button>`;
//             left.append(div)
//         });
//     })
// }


// function selectedData(id){
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>res.json()).then((data)=>{
//         const wrap=document.createElement("div");
//         wrap.innerHTML=`<b>${data.id}</b>-<span>${data.name}</span>`
//         right.append(wrap)
//     })
// }
// function updatedData(id){
//     fetch(`https://jsonplaceholder.typicode.com/users`).then((res)=>res.json()).then((data)=>{
//         data.map((value)=>{
//             value.id=id;
//         })
//     })
// }

function getData(){
    fetch("https://houzing-app.herokuapp.com/api/public/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:email.value,
            password:pw.value
        })
    }).then((res)=>res.json()).then((data)=>console.log(data))
}
console.log(email.value);
console.log(pw.value);