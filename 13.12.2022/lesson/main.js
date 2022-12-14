///// Scope and closure
// var => global Scope
/// let and const => local scope
// {
// let name ="Ali";
// };
// console.log(name)
// function getAge(){
//   var age =19;
// }
// // console.log(age)
//////
// for(var i=0;i<10;i++){
//       code ///
// }
// console.log(i);//10
// let age=18;
//   function getAge(){
//     let b=12;
//     console.log(age,b);////local memory 
//     return function getChildAge(){
//       console.log(age)///lexical environment
//     }
//     getChildAge()
//   }

//   console.log(getAge())
  
///Closure
// let name="ali";
// function getName(){
//   console.log(name)
//    function callName(){
//       console.log(name)
//     }
//     callName()
// }
// getName()
// // callName()