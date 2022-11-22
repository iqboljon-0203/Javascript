//////Object
/////key and value
// Data types=>primitive and none-primitive
// None-primitive=>Object(array,function,object)
// let name ="Aziz";
// let obj={name:"Aziz"};
// console.log(obj);
// let newObj={};//1
// let newObj2=new Object();//2
// // 
// const student1={
//     id:1,
//     age:14,
//     'full Name':"Ali Zoirov",
//     enterUniversity:2020,
//     major:"Business",
// };
// const student2={
//     id:1,
//     age:14,
//     'full Name':"Ali Zoirov",
//     enterUniversity:2020,
//     major:"Business",
// };
// console.log(student1===student2);
// const student3= structuredClone(student1)//copy 1 ///interview questions
// const student=JSON.stringify(student1);
// const student3=JSON.parse(student);/// copy 2-usuli
// student3.age=30;
// console.log(student3);
// console.log(student1);
// console.log(student1===student3);
// console.log(student.name);//1
// console.log(student['name']);///2
// student.age=20;///age keyi bo'lsa update qiladi bulmasa qodhib qoyadi
// let enter="enterUniversity";
// console.log(student[enter]);//1
// console.log(student.enterUniversity);//2
// console.log(student['enterUniversity']);///3
// console.log(student['full Name']);
// console.log(student['0']);
// delete student['full Name'];
// console.log(student);
// Object.freeze(student)//// const qilib beradi yani update not and not create
// student.id=2;
// student.girlFriend="Yes";
// Object.seal(student);///uptade qilsa buladi,not delete not create
// student.age=22;
////
// let id='id'
// console.log(id in student1);///return true or false
// console.log(student);

////////
// for (const key in student1) {
//     console.log(student1[key]);
// }

///// assign
// let student4={};
// Object.assign(student4,student1);
// console.log(student4);
//// obj to array
// const student={
//     id:1,
//     age:14,
//     'full Name':"Ali Zoirov",
//     enterUniversity:2020,
//     major:"Business",
// };
// const studentKeys=Object.keys(student);
// // console.log(studentKeys);
// const studentValues=Object.values(student);
// // console.log(studentValues);
// const keyAndValues=Object.entries(student);
// console.log(keyAndValues);


