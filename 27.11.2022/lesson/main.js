/////Optional chaining
// let obj={
//     name:"Ali",
//     faculty:{
//         name:"Software engeeniring"
//     }
// }
// console.log(obj.age?.name); //optional chaining error=>undefined
/////Numbers
// console.log(1_000_000+1);
////String to Number
// let num='1_000';
// console.log(parseInt(num));=>1
// console.log(Number(num));=>NaN
// console.log(+num);=>NaN
// console.log(num-0);=>NaN
// let num='1 billion'=>milliard 9 ta nol
// let number=1e6;=>million
// console.log(1e-1);=>0.1
// number to string and decimal to another bases
// let num=12;
// console.log(num.toString());
// toString("param")=>param => base
// console.log(num.toString(2));=>1100
// console.log(num.toString(8));=>14
// console.log(num.toString(16));=>c
///// bases to decimal
// let num='11011101';
// let number="123";
// console.log(parseInt(number));
// console.log(parseInt(num,2));=>221
// console.log(parseInt("abc123",16));
// console.log(parseInt("14",8));=> 12
////// Math => Js build in library
// console.log(Math.PI);=>3.141592653589793
// console.log(Math.floor(12.999999));=>Pastga qarab yaxlotlaydi
// console.log(Math.ceil(12.00001));=> yuqoriga qarab yaxlitlaydi
// console.log(Math.round(5.5));=> matematik yaxlitlash yani . keyingi son>=5 bolsa keyingisini chiqaradi aks holda sonni butun qismini chiqaradi
// console.log(Math.trunc(12.999));=> pastga qarab yaxlitlaydi faqat musbat sonlarda
// console.log(Math.floor(-12.999));=> yaxlitlaydi
// console.log(Math.trunc(-12.999));=> . dan keyingilarni o'chiradi
// console.log(parseInt(Math.random()*1000000));
// console.log(Math.min(12,56,75675,32132,4323,121,13123213));=> minimum
// console.log(Math.max(12,323,43543,121,21));=> maximum
// console.log(Math.pow(a,b));=> a sonni  b inchi darajasi
// console.log(Math.sign(12));=>1
// console.log(Math.sign(-132));=>-1
// console.log(Math.sign(0));=>0
// console.log(Math.sign("a"));=>NaN
// console.log(Math.sqrt(1296));=>36
// console.log(Math.cbrt(216));=>6
// console.log(Math.pow(16384,1/7));
/////Number Methods
// console.log(12.5648.toFixed(2));=> . ta keyin nechta raqamni olib qolib chiqarishni anglatadi va string qaytaradi
// console.log(parseInt(18.3232));
// console.log(parseFloat(12.67));
// let num='12+45';
// console.log(Number(num));
// console.log(eval(num));=>stringni ichida arifmetik amal bajaradi
// console.log(isNaN("11"));=> return true or false
// console.log(Object.is('12',"12")) => the same as with "==="
// let num=12.343434534;
// console.log(num.toPrecision(8));=>12.343435
// let number=0.00023232;
// console.log(number.toPrecision(3));=>0.000232
/////Strange
// console.log(0.1+0.2);=>0.30000000000000004
// console.log(0.1+0.2===0.3);=> false
// console.log(1/3);=>0.(3)=>1/3
// console.log(9_999_999_999_999_999);=>10000000000000000
// console.log(isNaN(NaN));=> true
// console.log(NaN===NaN);=> fasle
// let num =10;
// num%2===0?console.log("Juft Son"):console.log("Toq son")
// (num&1)?console.log("Toq Son"):console.log("Juft son")=> bitwise
// Binary
// 0=>0
// 1=>01
// 2=>10
// 3=>11
// 4=>100
// 5=>101
// 6=>110
// 7=>111
// console.log(Math.hypot(13,14));










