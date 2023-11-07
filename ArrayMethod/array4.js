var fruits = ["바나나", "오렌지"];
var newLength = fruits.unshift("사과", "딸기");
// ! 주의 할점은 push와 비교했을때 앞에 넣냐 뒤에 넣냐 문제
// ! shift는 제거 후 요소 반환, unshift는 추가하고 배열길이 반환 
// ! 이것이 차이이다. 명심하자 
console.log(fruits); // ["사과", "딸기", "바나나", "오렌지"]
console.log(newLength); // 4
