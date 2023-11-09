const numbers = [1, 2, 3, 4];

const squaredAndFlattened = numbers.flatMap(function(element) {
  return [element * element, element * 2];
});

console.log(squaredAndFlattened);
// 결과: [1, 2, 4, 4, 9, 6, 16, 8]


// ? map과 flatmap의 차이점은 리턴값이 여러개가 나와서 배열이 추가되는 일이 생겨도 해결될 수 있냐 없냐이다. 