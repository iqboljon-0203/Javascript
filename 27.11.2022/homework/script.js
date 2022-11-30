// Masalalar
// function binary(number){
//     let num=number.toString(2);
//     console.log(num);
//     let a=0;
//     let b=0;
//     for(let i=0;i<num.length;i++){
//         if(num[i]==0){
//             a++;
//         }
//         if(num[i]==1){
//             b++
//         }
//     }
//     return `${a} ta 0 va ${b} ta 1 qatnashgan`
// }
// console.log(binary(12));
// #2
// function minmax(arr){
//     let max=Math.max(...arr);
//     let min=Math.min(...arr);
//     return max-min;
// }
// console.log(minmax([1,2,3,43,55]));
// #3
function randomInteger(min,max){
    let numbers={};
    let counter=min;
    while(true){
        let num=parseInt(Math.random()*(max+1));
        if(num>min){
            numbers[counter]=num;
            counter++;
        }
        if(counter==max+1){
            break;
        }
    } 
    for(let i in numbers){
        console.log(i,":"+numbers[i]);
    }   
}
randomInteger(12,26)