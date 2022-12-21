//////Class
// class Car {
//     constructor(name){
//         console.log(name);
//     }
//     year=2020;
//     speed(){
//         console.log(++this.year);
//         // console.log(`this car speed is 120km/h`);
//     }
// }
// let tico=new Car("tico")
// let nexia=new Car();
// tico.speed()
// tico.speed()
// console.log("======");
// nexia.speed()
// nexia.speed()
// console.log(typeof Car);
// class Car {
//     year=2020;
//     get speed(){
//         console.log(++this.year);
//         // console.log(`this car speed is 120km/h`);
//     }
//     set speed(val){
//         console.log(val);
//     }
// }
// let damas = new Car();
// damas.speed=120;
// damas.speed
// class Car {
//     year=2020;
//     ["full"+"name"](value){
//         console.log(value);
//     }
//     speed(){
//         console.log(++this.year);
//         // console.log(`this car speed is 120km/h`);
//     }
// }
// let car=new Car()
// car.fullname("uz Auto motors")
/////inheritance

// class Car {
//     model="uzaauto"
//     constructor(name){
//         this.name=name
//         // this.model=model;
//         // this.year=year;
//         // this.country=country
//         // this.speed=speed;
//     }
//     getSpeed(){
//         console.log(`${this.name} speed is ${120}km/h`);
//     }
// }
// class Captiva extends Car{
//     // constructor(name,speed,){
//     //     super(name)
//     // }
//     constructor(...arg){
//         super(...arg)
//     }
//     isAirBag=true;
//     getInfo(){
//         super.getSpeed()
//     }
// }
// class Malibu extends Car{}
// let captiva=new Car("Katta moshina");
// captiva.getSpeed()
// let malibu=new Malibu("malibu");
// malibu.getSpeed()
////Malibu.__proto__=Car;
/////static methods
// class User{
//     age=19;
//     getAge(){
//         console.log(++this.age);
//     }
//     founded=2018;
//     static year=0;
//     static getYear(){
//         console.log(++this.year);
//     }
// }
// // let usr1=new User()
// // let usr2=new User()
// // usr1.getAge()
// // usr1.getAge()
// // console.log("=====");
// // usr2.getAge()
// User.getYear()
// User.getYear()
// User.getYear()
// User.getYear()
///private and protected
// class User{
//     _age=19;
//     getAge(){
//         console.log(++this._age)
//     }
    
//     founded=2018;
//     year=0;
    
//     getYear(){
//         this.getAge()
//         console.log(++this.year);
//     }
// }
// let usr=new User();
// usr.getYear()
////Built in class
// class Ar extends Array{};
// let arr=new Ar();
// let a=function(){}

// console.log(a instanceof Object);






