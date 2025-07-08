// Number Type

let num1 = 10;
let num2 = 1.5;
let num3 = -10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf1 = Infinity;  // 양의 무한대
let inf2 = -Infinity; // 음의 무한대

let nan = NaN; // Not a number, 연산이 실패했을 때 반환하는 값

// String Type

let myName = "이정환" // 쌍/작은타옴표 없을 경우 변수로 인식
let myLocation = "목동"
let introduce = myName + myLocation

let introduceText = `${myName}에 ${myLocation}거주합니다` // 백틱으로 만들 경우 뱐수 선언 가능 (템플릿 리터럴 문법)

// Boolean Type

let isSwitchOn = true;
let isEmpty = false;

// Null Type

let empty = null; // 아무 값도 포함하고 있지 않다.

// Undefined Type

let none; // 변수에 어떠한 값도 할당하지 않았을 때 