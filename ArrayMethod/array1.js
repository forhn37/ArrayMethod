let fruits = ["사과", "바나나"];
// let newLength = fruits.push("오렌지", "딸기");

// console.log(fruits); // ["사과", "바나나", "오렌지", "딸기"]
// console.log(newLength); // 4
// ! 주의할점은 배열을 반환하는 것이 아니라 배열의 길이를 반환한다는 점//
// ? 배열안에 객체를 넣으면 어떻게 되는 것인가 파악하가 - 문제없었음//
// ! 배열을 알고 싶다면 fruits라는 기존 배열을 확인해보면 된다//
let superLength = fruits.push({동물 : "사자" }, {식물 : "해바라기"})
console.log(superLength)// 배열의 길이 확인
console.log(fruits) // 새롭게 추가된 후의 배열상태 확인 