///Moment js
///Multiple Locali support
let date=new Date();
// function moment(){
//     return {
//         format:function(symbol){
//             if(symbol==="LT"){
//                 if(date.getHours()<12) return `${date.getHours()}:${date.getMinutes()} AM`
//                 else if(date.getHours()>=12) return `${date.getHours()}:${date.getMinutes()} PM`
//             }
//         }
//     }
// }
// console.log(moment().format("LT"));
////////
// function moment(){
//     return {
//         format:function(symbol){
//             if(symbol==="LTS"){
//                 if(date.getHours()<12) return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`
//                 else if(date.getHours()>=12) return `${date.getHours()}:${date.getMinutes()} PM`
//             }
//         }
//     }
// }
// console.log(moment().format("LTS"));
///////
// function moment(){
//     return {
//         format:function(symbol){
//             if(symbol==="L"||symbol==="l"){
//                 return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
                
//             }
//         }
//     }
// }
// console.log(moment().format("l"));
/////
// let month=["January","February","March","April","May",'June',"July","August","September","October","November","December"]
// function moment(){
//     return {
//         format:function(symbol){
//             if(symbol==="LL"){
//                 return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
//             }else if(symbol==="ll"){
//                 return `${month[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`
//             }
//         }
//     }
// }
// console.log(moment().format("ll"));
///////
// let month=["January","February","March","April","May",'June',"July","August","September","October","November","December"]
// function moment(){
//     return {
//         format:function(symbol){
//             if(symbol==="LLL"){
//                 if(date.getHours<12) {
//                     return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`
//                 }
//                 else if(date.getHours>=12){
//                     return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`
//                 }
                
//             }else if(symbol==="lll"){
//                 if(date.getHours<12) {
//                     return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} AM`
//                 }
//                 else if(date.getHours>=12){
//                     return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`
//                 }
//         }
//         }
//     }
// }
// console.log(moment().format("LLL"))
