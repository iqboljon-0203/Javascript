//// Masalalar
// #1
// function check(str1,str2){
//     if(str1.localeCompare(str2)===0||str2.localeCompare(str1)===0){
//         return "Bu ikki string bir-biriga mos"
//     }
//     else if(str1.includes(str2)===true ||str2.includes(str1)===true){
//         return "Bu ikki string bir-biriga qisman mos"
//     }else if(str1.includes(str2)===false ||str2.includes(str1)===false ){
//         return "Bu ikki string bir-biriga umuman mos emas"
//     }
// }
// console.log(check("salom","sa"));
// #2
// function getCount(str){
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         obj[str[i]]=1;
//     }
//     console.log(obj);
// }
// console.log(getCount("Salom"));
// #3
// function truncate(str,n){
//     return str.slice(0,n);
// }
// console.log(truncate("webbrain academy",5));
// #4
// function getCurrency(str){
//     let valyuta =str.indexOf("$");
//     str=str.slice(valyuta+1)
//     return str;
// }
// console.log(getCurrency("$1200"));
// #5
// function capitalized(str){
//     str=str.toLowerCase();
//     let capStr="";
//     capStr=str[0].toUpperCase();
//     for(let i =1;i<str.length;i++){
//         if(str[i]==" "){
//             capStr+=`${str[i+1].toUpperCase()}`
//             i++
//         }else{
//             capStr+=str[i];
//         }
//     }
//     return capStr;
// }
// console.log(capitalized("alo qale ishlar"));