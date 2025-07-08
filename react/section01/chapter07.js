// 대입 연산자

let var1 = 1; // =

// 산술 연산자

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 복합 대입 연산자 (산술 + 대입)

let num7 = 10;
num7 += 20; // +=

// 증감 연산자

let num8 = 10;
console.log(++num8); // 전위 연산 (결과 : 11)
console.log(num8++); // 후위 연산 (결과 : 11)
console.log(num8); // (결과 : 12)

// 논리 연산자

let or = true || false; // 결과 : true
let and = true && false; // 결과 : false
let not = !true; // 결과 : false

console.log(or, and, not);

// 배교 연산자

let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true
let comp3 = 2 > 1;
let comp4 = 2 < 1;
let comp5 = 2 >= 1;
let comp6 = 2 <= 1;

console.log(comp1, comp2, comp3, comp4);