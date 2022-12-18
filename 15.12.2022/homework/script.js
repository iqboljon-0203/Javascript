///Home work
/// sum(a)(b)(c)....( n)().
const sum  = function (a) {
    return function (b) {
        return b?sum(a+b):a
    }
};
console.log(sum(1)(2)(3)());