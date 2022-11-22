////while exercises
/////binary 
// #1
// function numberToBinary(number) {
//     return (number >>> 0).toString(2);
//   }
//   console.log(numberToBinary(-1));
// #2
// function numberToBinary(number){
//     let arr=[];
//     let i=0;
//     while(number>0){
//         arr[i]=number%2;
//         number=parseInt(number/2);
//         i++;
//     }
//    return arr.reverse().join('');
// }
// console.log(numberToBinary(24));=> bu manfiy sonlar uchun ishlamaydi 

// #1
// let i=3;
// while(i){
//     alert(i--);
// };=> alertda 3,2,va 1 chiqadi ,chunki i-- avval i ni o'zini chiqarib keyin 1 ga kamaytiradi;
// #2
// let i=0;
// while(++i<5){
//     alert(i);
// }//=> alertda 1,2,3 va 4 chiqadi chunki ++i birdaniga i ni qiymatini 1 ga oshiradi
// #3
// let i=0;
// while(i++ <5) {
//     alert(i);
// }//=>1,2,3,4,5 chiqadi,i++ avval i ushlab turib keyingi qatorda 1 ga oshirib chiqaradi
// #4
// for(let i=0;i<3;i++){
//     alert(`number ${i} !`);
// }=> rewrite to while
// #5
// let i=0;
// while(i<3){
//     alert(`number ${i} !`);
//     i++;
// }
/////Functions exercises
// #1
// function checkAge(age){
//     if(age>18){
//         return true;
//     }else{
//         return confirm('Did parents allow you?');
//     }
// }
// checkAge(19)=> bu yerda age 19 ga teng shunda function true qaytaradi,agar age<18 confirm chiqadi oynaga agar ok bosilsa true,cancel bosilsa false qaytaradi
// #2
// function checkAge(age){
//     if(age>18){
//         return true;
//     }else{
//         return confirm('Did parents allow you?')||false;
//     }
// }
// console.log(checkAge(16));
// #3
// function min(a,b){
//     if(a<b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(min(3,4));
// #4
// let pow=function(x,n){
//     return x**n;
// };
// console.log(pow(2,10));
// #5
// function ask(question,yes,no){
//     if(confirm(question)){
//         yes();
//     }
//     else{
//         no();
//     }
// }
// ask("Do you agree?",
// function(){
//     alert("You agreed!");
// },
// function(){
//     alert("You cancelled the execution");
// }); rewrite to arrow function
////////
// let ask=(question,yes,no)=>{
//     if(confirm(question)){
//         yes();
//     }
//     else{
//         no();
//     }
// };
// ask("Do you agree?",
// function(){
//     alert("You agreed!");
// },
// function(){
//     alert("You cancelled the execution");
// });