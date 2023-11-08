// var fruits = ["사과", "바나나", "오렌지", "딸기"];
// ! fruits.splice(1, 2, "수박", "체리");
// ! start: 변경을 시작할 인덱스를 지정합니다.
// ! deleteCount: 삭제할 요소의 수를 지정합니다.
// ! item1, item2, ...: 배열에 추가할 요소를 나열합니다.
// ! 결론은 자른 배열의 요소를 반환한다
let fruits = ["사과", "바나나", "오렌지", "딸기"];
// fruits.splice(1, 2, "수박", "체리");
// ! 옵션 설정
// ! 배열을 반환함
let otherfruits = fruits.splice(1, 2, "수박", "체리");
console.log(otherfruits)
console.log(fruits); // ["사과", "수박", "체리", "딸기"]