////Home work
// #1
// let browser="Chrome";
// switch(browser){
//     case 'Edge':
//         console.log("You have got the Edge!");
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         console.log("OKay We support the browsers too");
//         break;
//     default:
//         console.log("We hope that this page looks ok!");
// }
// answer: agar browser="Chrome" bo'lsa console ga "You have got the Edge! shu chiqadi
/// lekin agar browser => 'Chrome':
    // 'Firefox'
    //      'Safari'
    //     'Opera'
    //     bo'lsa consolega "OKay We support the browsers too" chiqadi .

    // else bu qiymatlarni birortasi mos kelmasa "We hope that this page looks ok!" bu chiqadi
    // #2
    // let a=+prompt("a?","");
    // let a=2;
    // if(a==0){
    //     console.log(0);
    // }
    // if(a==1){
    //     console.log(1);
    // }
    // if(a==2||a==3){
    //     console.log(2,3);
    // }
    // answer agar a=1 bolsa alertda 1 chiqadi, agar a=0 bolsa alertda 0 chiqadi;
    // yana a==2 yoki a==3 bolsa alertda 2,3 chiqadi
    // #3
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if (number === 1) {
//     console.log("1 tub son emas");
// }
// else if (number > 1) {

//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} bu tub son`);
//     } else {
//         console.log(`${number} bu tub son emas`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }