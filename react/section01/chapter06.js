// 묵시적 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 결과 : 1020

// 형시적 형 변환

let str1 = "10";
let strToNum = Number(str1);
console.log(10 + strToNum); // 결과 : 20

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자로 변환
console.log(strToNum2); // 결과 : 10

// 숫자 -> 문자열

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다"); // 결과 : 20입니다