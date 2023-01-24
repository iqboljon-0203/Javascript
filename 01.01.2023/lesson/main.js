///DOM-5 /Forms
// #forms
// console.log(document.forms);
// console.log(document.forms[1]);


// let first=document.forms.form1;
// console.log(first);

// #elements
// console.log(document.forms[0].elements[2]);
// console.log(document.forms[1].elements.login);-> return array
// form.login.name='';
// console.log(form.login);
// console.log(form.elements.login);
// #select
// change default value
// console.log(select.options[2].selected=true);
// select.value="ru";
// select.selectedIndex=0;
////#input

// inp.onblur=(event)=>{
//     if(!event.target.value.includes("@")){
//        error.innerText="Hey xato bu";
//        error.style.color="red" 
//     }else{
//         error.innerText=null
//     }
// }
// inp.onfocus=()=>{
//     error.innerText=null
// }
// console.log(select.value);
form.onsubmit=(event)=>{
    console.log(select.value);
    form.action=`https://jsonplaceholder.typicode.com/users/${select.value}`;
    form.methos="POST"

    // event.preventDefault();
    // console.log("salom");
}
