/////Curry functions
// function check(m,n,i){
//     console.log(m*n*i);
// }
// function getData(a){
//     if(a<3){
//         return (b)=>{
//             return (c)=>{
//                 return check(a,b,c)
//             }
//         }
//     }
   
// }
// getData(2)(3)(4);
/////use case 
// function operations(type){
//     return a=>b=>c=>{
//         switch(type){
//             case "add":return a+b+c;break;
//             case "multiply":return a*b*c;break;
//             case "divide":return a/b/c;break;
//             case "minus":return a-b-c;break;
//         }
//     }
// }
// let math=operations("minus");
// console.log(math(4)(2)(3));
//// example for write infinite curry
// function sum(a){
//     return (b)=>{
//         if(b){
//             return sum(a+b);
//         }
//         else {
//             return a;
//         }
//     }
// }
// console.log(sum(2)(3)(7)(9)());