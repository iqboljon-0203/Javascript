//// while,do while,functions,param,callback
/////Karra jadvali 
// for(let i=1;i<=9;i++){
//     console.log(`${i} lik karra jadvali:\n`);
//     for(let j=1;j<=10;j++){
//         console.log(`${i}*${j}=${i*j}\n`);
//     }
// }
///karra jadvali
// let i=1;
// let j=1;
// while(i<=9){ 
//     console.log(`${i} lik karra jadvali:\n`);
//     while(j<=10){
//         console.log(`${i}*${j}=${i*j}\n`);
//         j++;
//     }
//     i++;
// }
// condition = falsy while tuxtaydi
// let a=3;
// while(true){
//     console.log(a);
// }
////do while 
// do{
//     code ..
// }while();
// let i=0;
// do{
//     console.log(i);
// }while(0);

//// functions
// #1 funtions declaration
// getName();
// function getName(){
//     console.log("Karim");
// }
// getName();
// getName();
// getName();
////function  expression
// let getName=function(){
//     console.log("Ali");
// };
// getName();
// getName();
// getName()
///// arrow functions
// 
// getName();
///inner and outer variable
// let name="Karim";
// let getName=()=>{
//     name="Komil";
//      console.log(name);
// };
// getName();
// console.log(name);
////shadow variables
// let surname="aliyev";
// function callName(){
//     surname="valiyev";
//     console.log(surname);
// }
// callName();
// console.log(surname);
// function callFriend(name,age,isMarried){
//     console.log(`Hey ${name}  dostim menga qara!!!`);
//     console.log(`Uni yoshi ${age}`);
//     console.log(`U turmush qurgan ${isMarried}`);
// }
// callFriend(20,"Asadbek",false);
// callFriend("Karim",25,true);
// callFriend("Ali",21,false);
// callFriend("Vali",19,true);
/////default parametr
// function callHim(name,surname=""){
//     // if(surname){
//     //     console.log(name,surname);
//     // }
//     // else{
//     //     console.log(name);
//     // }
//     // console.log(name,surname||"");
//     console.log(name,surname);

// }
// callHim('Ali',"Karimov");
// let getAge=function(age){
//     return age;
// };
// console.log(getAge(18));
// console.log(getAge(18)+1);
///callback functions
// function getAge(age,hisAge){
//     hisAge();
//     console.log(age);
// }
// getAge(18,()=>{
//     console.log('Uning yoshi');
// });
