function calc() {
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력하세요.","YYYY");;
    var age;
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
    // 문서에서 선택자를 사용해 id값이 "result"인 태그 선택하고, HTML에 삽입
}