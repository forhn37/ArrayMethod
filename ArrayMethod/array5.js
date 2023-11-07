var fruits = ["사과", "바나나", "오렌지", "딸기", "체리"];
var slicedFruits = fruits.slice(1, 4);
// ! 주의할 점은 slice(1, 4)안에 1번은 인덱스이기 때문에 
// ! 주의해야하고 2번째 매개변수는 미만이기 때문에 포함하면 안된다. 
// ! 그리고 작동시 범위를 지정한 배열을 내보낸다.
console.log(slicedFruits); // ["바나나", "오렌지", "딸기"]
