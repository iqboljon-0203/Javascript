/////Masalalar;
// #1
// let str="Yuldashev Iqboljon";
// function countCase(str){
//     str=str.replaceAll(" ","")
//     let k=0;
//     let n=0;
//     for(char of str){
//         if(char===char.toUpperCase())k++
//         else n++
//     }
//     return `${k} ta katta xarf, ${n} ta kichik xarf bor`
// }
// console.log(countCase(str));
// #2
// function updateChar(str){
//     let arr=str.split('')
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==="@"){
//             arr.splice(i,1,"a")
//         }
//     }
//     return arr.join("")
// }
// console.log(updateChar("WEbbr@in Ac@demy"));
// #3
// function removeDublicates(str){
//     let arr=str.split("");
//     arr=arr.filter((value,index,array)=>array.indexOf(value)===index);
//     return arr.join("")
// }
// console.log(removeDublicates("webbrainAAcaddemy"));
// #4
// function getNumber(str){
//     let arr=[]
//     for(char of str){
//         if((char-0)===parseInt(char)){
//             arr.push(char)
//         }
//     }
//     return arr.join('')
// }
// console.log(getNumber("We66a1n Acade4m7"));
// #5
// function dublicateChars(str){
//     let arr=str.split('');
//     for(let i=0;i<arr.length;i++){
//         arr.splice(i,1,arr[i],arr[i])
//     }
//     return arr.join('')
// }
// console.log(dublicateChars("webbrain"));
// #6
// function palindrome(str){
//     return str.split('').reverse().join("")===str;
// }
// console.log(palindrome("kiyik"));
// #7
// function checkStr(str1,str2){
//   if(str1.length===str2.length){
//     return (str1.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join(''))
//   }else{
//     return false
//   }
// }
// console.log(checkStr("veyobatsu","ustaboyev"))
// #8
// let str='Assalomu alaykum'; 
// let obj={};
// function countCharsString(string){
//     string=string.replace(" ",'').toLowerCase();
//     for(let char of string){
//         if(char in obj) ++obj[char]
//         else obj[char]=1
//     }
//     return obj;
// }
// console.log(countCharsString(str));
// #9
////String ziplash
// function zip(str){
//     let arr=str.split('');
//     for(let i=0;i<arr.length;i++){
//         let k=1;
//         for(let j=0;j<arr.length;j++){
//             if(i!==j && arr[i]===arr[j]){
//                 k++;
//                 arr.splice(j,k-1,k)
//             }
//         }
//     }
//     return arr.join('')
// }
// console.log(zip("webbrainnnn"));
// #10
// function removeMax(arr){
//     let k=0;
//     while(arr.length>1){
//         arr=arr.sort((a,b)=>b-a)
//         let first=arr[0];
//         let second=arr[1];
//         arr.splice(0,2)
//         if(first-second>0){
//             arr.push(first-second)
//         }
//         k++
//     }
//     return k
// }   
// console.log(removeMax([2,3,2,4,5,2,3]));

