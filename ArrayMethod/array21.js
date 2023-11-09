const numbers = [1, 2, 3, 4];

const result = numbers.reduceRight(function(accumulator, currentValue) {
  console.log(`누적된 값: ${accumulator}, 현재 값: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log("최종 결과:", result);

// ! reduce와 시작하는 포인트만 다름 