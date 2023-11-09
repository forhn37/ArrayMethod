const numbers = [1, 2, 3, 4];

const areAllPositive = numbers.every(function(element) {
  return element > 0;
});

console.log("배열의 모든 요소가 양수인가?", areAllPositive); // 배열의 모든 요소가 양수인가? true

// ! array.every(predicate)