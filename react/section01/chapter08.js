// null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 결과 : 10
let var5 = var2 ?? var3; // 결과 : 10 (둘다 null, undefined 아니라면 처음 값 출력)

console.log(var4, var5);

// typeof 연산자

let var6 = 1;
var6 = "hello";

let t1 = typeof var6;
console.log(t1); // 결과 : string

// 삼항 연산자
let var7 = 10;

let res = var7 % 2 === 0 ? "짝수" : "홀수"; // 요구사항 : 변수 res에 var7의 값이 짝수일 경우 "짝수", 홀수일 경우 "홀수"
console.log(res); // 결과 : 짝수