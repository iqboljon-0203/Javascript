/////Home work
// #1
// function makeUser(){
//     return {
//         name:"John",
//         ref:this
//     };
// }
// let user =makeUser();
// console.log(user.ref.name);=>undefined////chunki returnda object qaytapti va uni user ga o'zlashtirdik,endi shu user.ref.name teng boladi this.name bizda this objectni ichida objectga teng tashqarida {} boladi unda nama bo'lmaganligi uchun undefined chiqadi
// #2
// let a=+prompt("Istalgan son kiriting","");
// let b=+prompt("Istalgan boshqa son kiriting","");
// let calculator={
//     a,
//     b,
//     sum:function(){
//         return this.a+this.b;
//     },
//     mul:function(){
//         return this.a*this.b;
//     },
//     read:function(){
//         console.log(`${a} va ${b} ko'paytmasi=${this.mul()}\n${a} va ${b} yig'indisi=${this.sum()}`);
//     }
// }
// calculator.read();
// #3
// let ladder={
//     step:0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep(){
//         console.log(this.step)
//         return this;
//     }
// }
// console.log(ladder.up().up().down().showStep().down().showStep());

// #4
// function A(){
// }
// function B(){

// }
// let a=new A();
// let b=new B();

// console.log(a==b);