///Home work
// 1-masala
// let sign;
// function operations(type){
//     type==="add"
//         ? sign="+"
//         :type==="divide"
//         ? sign="/"
//         :type==="multiply"
//         ? sign="*"
//         :sign="";
//         return function inner(a){
//             return (b)=>{
//                if(b) return inner(eval(`${a}${sign}${b}`));
//                else return a;
//             }
//         }

// }
// const math=operations("add");
// console.log(math(8)(4)(4)(1)());
// 2-masala
let sign;
function math(type,array){
        type==="add"
            ? sign="+"
            :type==="divide"
            ? sign="/"
            :type==="multiply"
            ? sign="*"
            :sign="";
            let string="0";
            array.map(item=>{
                string+=sign;
                string+=item;
            })
            return eval(string)
}
console.log(math("add",[1,2,3]));