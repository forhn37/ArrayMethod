const numbers = [1, 2, 3, 4];

const result = numbers.reduce(function(accumulator, currentValue, currentIndex, array) {
  console.log(`누적된 합: ${accumulator}, 현재 값: ${currentValue}, 현재 인덱스: ${currentIndex}, 전체 배열: [${array}]`);
  return accumulator + currentValue;
}, 0);

console.log("최종 결과:", result);

// ! 첫번째 회전일때 값을 다음 계산시 첫번째 매개변수로 쓴다는 것이 중요하다. 