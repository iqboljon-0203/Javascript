// Masalalar
// savol! 
// Berilgan N integierning, binary korinishidagi, 1lar oralig'idagi 0 larning eng uzun ketma ketligini toping.

// function findMax(number) {
//     let binary = number.toString(2);
//     let oneCounts = [];
//     let wasOne = false;
//     let sum = 0;
//     for (let char of binary) {
//       if (char === "1") {
//         wasOne = true;
//         if (sum !== 0) oneCounts.push(sum);
//         sum = 0;
//       }
//       if (char === "0" && wasOne) sum++;
//     }
//     return oneCounts.length === 0 ? 0 : Math.max(...oneCounts);
//   }
//   console.log(findMax(529));

////Sizlarga N uzunligidagi A nomli array Hamda S intiger qiymat berildi. 

// Sizni vazifangiz:
// A nomli array ichida o'rta arifmetik qiymati S ga teng bo'lgan nechta davomiy fragment bor.

// function test(array,s,k=0){
//     s=parseFloat(s);
//     if(array.length>1){
//         if(array[0]===s){
//             k++;
//         }
//         for(let index=0;index<array.length-1;index++){
//             for(let j=index+1;j<array.length;j++){
//                 let sum=0;
//                 for(let n=0;n<=index;n++){
//                     sum+=array[n];
//                 }
//                 if((sum+array[j])/(index+2)===s) k++;
//             }
//         }
//         array.splice(0,1)
//         return test(array,s,k)
//     }
//     else{
//         if(array[0]===s){
//             k++;
//         }
//         return k;
//     }
// }
// console.log(test([0,4,3,-1],2));
// console.log(Object.fromEntries());=? objectdan arrayga
/////Array.from(map object,set Object)=>array convert qiladi
// {/* <caption></caption>=>sarlavha uchun */}
// flex-item and pssitioned elements work z-index
// transition => element and hover holatda qaysi birida farqi bor

//// Factorial
// function factorial(n){
//     let answer = 1;
//         if (n == 0 || n == 1){
//          return answer;
//        }else{
//          for(let i = n; i >= 1; i--){
//            answer = answer * i;
//          }
//          return answer;
//        }  
//    }
/////
// function factorial(n){
//     let answer=1
//     if(n===0||n===1){
//         return answer
//     }else{
//         return answer*factorial(n-1);
//     }
// }
// console.log(factorial(5));

