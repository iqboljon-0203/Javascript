///Recursion functions
// function power(base, exponent) {
//   return exponent == 0? 1 : base * power(base, --exponent);
// }
// console.log(power(2,4))
// let num =6;
// 1+2+3+4+5+6==21
// let sum=0;
// function getSum(n){
//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum
// }
// console.log(getSum(6));
// let sum=0;
// function getSum(n){
//     if(n===1) return sum+=1
//     else{
//         sum+=n;
//         return getSum(n-1)
//     }
//     return sum;
// }
// console.log(getSum(6));

// let company = {
//     sales: [
//       { name: "John", salary: 1000 },
//       { name: "Alice", salary: 1600 },
//     ],
//     development: {
//       sites: [
//         { name: "Peter", salary: 2000 },
//         { name: "Alex", salary: 1800 },
//       ],
//       dev: [
//         { name: "Peter", salary: 2000 },
//         { name: "Alex", salary: 1800 },
//       ],
//       internals: [{ name: "Jack", salary: 1300 }],
//     },
//   };
  ////
//   let sum=0;
//   function getSalaries(param){
//     for(let item in param){
//         if(Array.isArray(param[item])){
//             param[item].map(child=>{
//                 sum+=child.salary;
//             })
//         }
//         else{
//             return getSalaries(param[item])
//         }
//     }
//     return sum;
//   }
//   console.log(getSalaries(company));


// function sumSalaries(param){
//       if(Array.isArray(param)){
//         return param.reduce((sum,current)=>sum+current.salary,0)
//       }else{
//         let sum=0;
//         for(subComp of Object.values(param)){
//           sum+=sumSalaries(subComp);
//         }
//         return sum;
//       }
//     }
//     console.log(sumSalaries(company));