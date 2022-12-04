//////Home work
let users=[
    {id:1,year:1998,engine:1,name:"Tico"},
    {id:2,year:2005,engine:1.2,name:"Matiz"},
    {id:3,year:2010,engine:1.6,name:"Gentra"},
    {id:4,year:2010,engine:1.5,name:"Cobalt"},
    {id:5,year:2012,engine:2,name:"Malibu"},
    {id:6,year:2000,engine:1.2,name:"Damas"},
    {id:7,year:2018,engine:2.4,name:"Tracker"},
];
/////
// #1
// function checkPastYear(arr){
//     let res=[];
//     arr.map((item)=>{
//         if(item.year<2000){
//             res.push(item.name)
//         }
//     })
//     return res;
// }
// console.log(checkPastYear(users));
// #2
// function checkAfterYear(arr){
//     let res=[];
//     arr.map((item)=>{
//         if(item.year>2000){
//             res.push(item.name)
//         }
//     })
//     return res;
// }
// console.log(checkAfterYear(users));
// #3
// let result=users.sort((a,b)=>b.engine-a.engine);
// console.log(result);
// #4
// let result=users.sort((a,b)=>b.year-a.year);
// console.log(result);
// #5
//  let result=users.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(result);
// #6
// function addStatuscheckPastYear(arr){
   
//     arr.map((item)=>{
//         if(item.year<2000){
//             item["status"]="eski";
//         }
//     })
//     return arr
// }
// console.log(addStatuscheckPastYear(users));
// #7
// function addStatuscheckBetweenYear(arr){
//     arr.map((item)=>{
//         if(item.year>=2000&&item.year<=2010){
//             item["status"]="o'rta";
//         }
//     })
//     return arr
// }
// console.log(addStatuscheckBetweenYear(users));
// #8
// function addStatuscheckBetweenYear(arr){
//     arr.map((item)=>{
//         if(item.year>2010&&item.year<2020){
//             item["status"]="yangi";
//         }
//     })
//     return arr
// }
// console.log(addStatuscheckBetweenYear(users));
//////checkStringElementsCount
// function checkString(str1,str2){
//     str1=str1.replace(" ","").toLowerCase();
//     str2=str2.replace(" ","").toLowerCase();
//     let arrStr1=str1.split("");
//     let obj={};
//     arrStr1.map((item)=>{
//         let k=0;
//         for(let i=0;i<str1.length;i++){
//             if(str1[i]===item){
//                 k++;
//             }
//         }
//         obj[item]=k;
//     })
//     let boolean=true;
//     arrStr1.map((item)=>{
//         let k=0;
//         for(let j=0;j<str2.length;j++){
//             if(str2[j]===item){
//                 k++;
//             }
//         }
//         if(obj[item]!==k){
//             boolean=false;
//         }
        

//     })
//     return boolean;

// }
// console.log(checkString("Men sartaroshman","Nem Namshoratsar"));
/////Masalalar
// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
let user = [{
    id: 1,
    name: 'Odil',
    age: 78,
    children: [
        {
            id: 1,
            name: 'Umar',
            age: 54,
            children: [
                { id: 1, name: 'Asmo', age: 34 },
                { id: 2, name: 'Osim', age: 30 },
                { id: 3, name: 'Xattob', age: 25 },
            ]
        },
        { id: 2, name: 'Umar', age: 14 },
        { id: 3, name: 'Umar', age: 25 },
    ]
}]
///Answer
// function objectFilter(array){
//     let filteredArray=array.filter((item)=>item.age>18);
//     console.log(filteredArray);
//     for (const obj of filteredArray) {
//         let cond=Object.keys(obj).includes("children");
//         if(cond){
//             objectFilter(obj.children)
//         }
//     }
//     return filteredArray;
// }
// console.log(objectFilter(user));
// No8
// array ichida object berilgan. job berilgan objectlarni qaytaring
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// // Answer
// // let res=arr.filter((item)=>item.job)
// // console.log(res);
// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
// id:1,name:'Usmon',job:'developer'
// }
// /////Answer
// let copyObj=structuredClone(obj);
// copyObj.age=18;
// console.log(obj);
// console.log(copyObj);
// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// let obj={};
// function add(item,key,value){
//     item.key=value
//     return item
// }
// console.log(add(obj,'address','toshkent'))
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:2
// }
// // Answer
// function check(obj){
//     if(obj.practice>1){
//         console.log("Qabul qilindi");
//     }else{
//         console.log("Ming bor uzr");
//     }
// }
// check(obj)
// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
// }
// ///Answer
// function giveCredit(param){
//     if(param.talaba){
//         param["kiridit"]=true;
//     }else{
//         param["kiridit"]="olinmadi";
//     }
//     return param
// }
// console.log(giveCredit(obj))
// chiqish
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1,
//     talaba:true,
//     kiridit:true
// }
// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// 
// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// arr=['Andijon','Namangan','Qarshi','toshkent']

// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'}
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]
// logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz

// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// chiqish
// true
// No16
// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
// }

// // add IELTS
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }

// 2 - shart
// // agar ielts 5.5 yoki katta bolsa consoleda qabul qilindi,aks holda qayta topshirish kk
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// // qabul qilindi
// 3 - shart
// // agar ielts 5.5 yoki katta bolsa objectga student:true qoshilsin qiymati bn birga
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }

// // qoshimcha
// 4 - shart
// // agar student true bolsa unga maxsus key berilsin(math.random+id orqali berilsin)
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true
// }
// chiqish
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// 5 - shart
// // talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar qarol bn name bazadagi
// // parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name xato chiqsin
// person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     parol: 101
// }
// function Kirish(parol,name){}

// Kirish(101,'Umar') //=> hush kelibsiz
// Kirish(10,'Umar')  // => parol yoki name xato
// Kirish(101,'Ali')   // => parol yoki name xato