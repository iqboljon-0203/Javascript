/////String
// let str="Salom";
// let text=new String("salom");///old version
// console.log(str);
// console.log(text);
/////Quotes
// let str="As  \" sa lomu \n 'ala' yku m  ";
// console.log(str);
// let str='As  " sa lomu" \'ala\'ykum\n qalesiz  ';
// let name="Ali";
// console.log(str);
// let str=`Assalomu
// alaykum 
// ${name}
// qalesiz`;
// console.log(str);
/////New line=>\n
/////Tab => \t
// let str="Assalomu alaykum\t va\t rahmatullohi barakotuh";
// console.log(str);
// \=> o'zidan keyingi elementni inkor qiladi
// let str="Assalomu alaykum \\qalesiz";
// console.log(str);
// let str="Assalomu alaykum qalesiz";
// console.log(str[9]);=> indexdagi harfni chiqaradi
// console.log(str.at(-7));//=> indexdagi xarfni chiqaradi va minus index oladi
// console.log(str.charAt(9));// => indexdagi xarfni chiqaradi lekin minus index olmaydi
////Methods
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// toLocaleLowerCase and toLocaleUpperCase=>Mahalliy
// console.log(str.toLocaleUpperCase("turkish"));
// console.log(str.indexOf("a"));=>3 indexini qaytaradi
// console.log(str.lastIndexOf("a"));=>18 agar topolmasa -1 qaytaradi
// console.log(str.includes("bsasa"));=> return true or false
// console.log(str.startsWith("Assaloma"));
// console.log(str.endsWith("siza"));
// let str="Qalesiz akaginam!"
// console.log(str.padStart(18,"*"));=> boshida berilgan valueni qushadi qachonki str.length===count ga
// console.log(str.padEnd(12,"%"));
// console.log(str.slice(-8,-1));=> berilgan indexlari oraligini kesib oladi va minusli qiymat oladi
// console.log(str.slice(0,5));
// console.log(str.substring(0,5));//=> minusli qiymat olmaydi va str.substring(0,5)===str.substring(5,0)
// console.log(str.substr(0,6));
// let str='2+10';
// console.log(eval(str));
// let str="Salom"
// console.log(str.length);=>26
// console.log(str.trim().length);=>17
// console.log(str.split("",2));=>separator,limitl
// console.log(str.repeat(10));=> takrorlab chiqatib beradi count miqdoricha
// console.log(str.concat(" qalesiz!"));///=> stringlarini qo'shish uchun
// console.log(str.search("a"));=> indexini chiqaradi
// let str="Assalomu alaykum aka aka";
// console.log(str.replaceAll("aka","uka"));=> hammasini o'zgartiradi
// console.log(str.replace("aka","uka"));=> faqat 1-sini o'zgartiradi
// console.log(str.valueOf());=> consstructor string valuesini olib beradi
// let str="salom";
// str[2]="B";
// console.log(str);=>immutable
// for(item of str){=> iteratsiya uchun
    // console.log(item);
// }
let str1="Salomlaykum";
let str2=new String("");
// console.log(str1.localeCompare(str2)); return -1 0 1





